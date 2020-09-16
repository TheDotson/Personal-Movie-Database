import React from 'react';
import movieData from '../../../helpers/data/movieData';
import './New.scss';

class New extends React.Component {
  state = {
    movies: [],
  }

  movieTest = () => {
    const jaws = 'jaws';
    movieData.getMovies(jaws)
      .then((movies) => this.setState({ movies }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.movieTest();
  }

  render() {
    return (
      <div className="new">
        <h1>New Movie</h1>
      </div>
    );
  }
}

export default New;
