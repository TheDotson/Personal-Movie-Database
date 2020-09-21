import React from 'react';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Personal Movie Database</h1>
        <p>Have you ever caught yourself trying to remember whether or not you own a movie?  Or better yet, what format you own the movie?<br/>
        That's why the PMDB was made!<br/>
        This simple app will allow for even the most extensive of collections to be catalogued.</p>
      </div>
    );
  }
}

export default Home;
