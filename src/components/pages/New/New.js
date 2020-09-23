import React from 'react';
import movieData from '../../../helpers/data/movieData';
import MovieCard from '../../shared/MovieCard/MovieCard';
import './New.scss';

class New extends React.Component {
  state = {
    movies: [],
    searchTerm: '',
  }

  searchTermEvent = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  };

  movieSearch = (e) => {
    const { searchTerm } = this.state;
    e.preventDefault();
    movieData.getMovies(searchTerm)
      .then((movies) => this.setState({ movies }))
      .catch((err) => console.error(err));
  }

  render() {
    const { movies } = this.state;
    const movieCards = movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
    return (
      <div className="new">
        <h1 className="headline">Movie Search</h1>
        <form className="col-6 offset-3">
          <input
            className="form-control mr-sm-2"
            type="search"
            id="searchTerm"
            placeholder="Enter movie title"
            onChange={this.searchTermEvent}
            />
          <button className="btn btn-warning search-button" onClick={this.movieSearch}>Search</button>
        </form>
        <div className="search-results">
          {movieCards}
        </div>
      </div>
    );
  }
}

export default New;
