import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Navbar.scss';

class NavBar extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { authed } = this.props;
    const buildNav = () => {
      if (authed) {
        return (
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/collection">Collection</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.logoutClickEvent}><i className="fas fa-sign-out-alt"></i>Logout</NavLink>
            </NavItem>
          </Nav>
        );
      }
      return <Nav navbar>
              <NavItem>
                <NavLink onClick={this.loginClickEvent}><i className="fab fa-google"></i>Login</NavLink>
              </NavItem>
            </Nav>;
    };

    return (
      <div>
        <Navbar dark expand="md">
          <NavbarBrand tag={RRNavLink} to="/home">PMDB</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {buildNav()}
          </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
