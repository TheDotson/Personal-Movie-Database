import React from 'react';
import PropTypes from 'prop-types';
import './CollectionCard.scss';

class CollectionCard extends React.Component {
  static propTypes = {
    deleteMovie: PropTypes.func.isRequired,
    updateMovie: PropTypes.func.isRequired,
  }

  deleteMovieEvent = (e) => {
    e.preventDefault();
    const { movie, deleteMovie } = this.props;
    deleteMovie(movie.id);
  }

  updateWatchedEvent = (e) => {
    e.preventDefault();
    const { movie, updateMovie } = this.props;
    const updatedMovie = {
      movieId: movie.movieId,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      uid: movie.uid,
      watched: true,
    };
    updateMovie(movie.id, updatedMovie);
  }

  render() {
    const { movie } = this.props;
    const moviePoster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    return (
      <div className="card">
        <div className="card-title">
          <h4 className="text-center">{movie.title}</h4>
        </div>
        <img className="card-img-top poster-image" src={moviePoster} alt={movie.title}></img>
        <div className="card-body">
          <p className="text-center">{movie.overview}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning" onClick={this.updateWatchedEvent}><i className="fas fa-eye"></i></button>
          <button className="btn btn-danger" onClick={this.deleteMovieEvent}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>

    );
  }
}

export default CollectionCard;
