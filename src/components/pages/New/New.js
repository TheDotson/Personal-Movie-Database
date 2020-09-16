import React from 'react';
import movieData from '../../../helpers/data/movieData';
import MovieCard from '../../shared/MovieCard/MovieCard';
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
    const { movies } = this.state;
    const movieCards = movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
    return (
      <div className="new">
        <h1>New Movie</h1>
        {movieCards}
      </div>
    );
  }
}

export default New;
