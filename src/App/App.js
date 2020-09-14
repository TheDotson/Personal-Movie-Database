import React from 'react';
import axios from 'axios';
import apiKeys from '../helpers/apiKeys.json';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    axios.get(apiKeys.tmdbConfig.apiKey)
      .then((res) => console.warn(res))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;
