import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';
import Collection from '../components/pages/Collection/Collection';
import Home from '../components/pages/Home/Home';
import Navbar from '../components/pages/Navbar/Navbar';
import New from '../components/pages/New/New';
import ViewMovie from '../components/pages/ViewMovie/ViewMovie';
import './App.scss';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

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

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Navbar authed={authed} />
            <div>
              <Switch>
                <Route path="/home">
                  <Home authed={authed} />
                </Route>
                <PrivateRoute path="/collection" component={Collection} authed={authed} />
                <PrivateRoute path="/search" component={New} authed={authed} />
                <PrivateRoute path="/view/:movieId" component={ViewMovie} authed={authed} />
                <PublicRoute path="/auth" component={Home} authed={authed} />
                <Redirect from="*" to="/hello" />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
