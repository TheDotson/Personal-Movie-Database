import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';
import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
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

  render() {
    const { authed } = this.state;
    const loginButton = authed
      ? <button className="btn btn-danger logState" onClick={this.logoutClickEvent}>Logout <i className="fas fa-sign-out-alt"></i></button>
      : <button className="btn btn-danger logState" onClick={this.loginClickEvent}><i className="fab fa-google"></i> Login</button>;

    return (
      <div className="App">
        <h2>PMDB</h2>
        {loginButton}
      </div>
    );
  }
}

export default App;
