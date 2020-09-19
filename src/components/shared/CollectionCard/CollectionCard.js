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

  watchedEvent = (e) => {
    e.preventDefault();
    const { movie, updateMovie } = this.props;
    const updatedMovie = {
      favorite: false,
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

  unwatchEvent = (e) => {
    e.preventDefault();
    const { movie, updateMovie } = this.props;
    const updatedMovie = {
      favorite: false,
      movieId: movie.movieId,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      uid: movie.uid,
      watched: false,
    };
    updateMovie(movie.id, updatedMovie);
  }

  favoriteEvent = (e) => {
    e.preventDefault();
    const { movie, updateMovie } = this.props;
    const updatedMovie = {
      favorite: true,
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

  removefavoriteEvent = (e) => {
    e.preventDefault();
    const { movie, updateMovie } = this.props;
    const updatedMovie = {
      favorite: false,
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
              {
                movie.watched ? (
                  <button className="btn btn-secondary" onClick={this.unwatchEvent}><i className="fas fa-eye-slash"></i></button>
                ) : (
                  <button className="btn btn-secondary" onClick={this.watchedEvent}><i className="fas fa-eye"></i></button>
                )
              }
              {
                movie.favorite ? (
                  <button className="btn btn-warning" onClick={this.removefavoriteEvent}><i className="fas fa-star"></i></button>
                ) : (
                  <button className="btn btn-warning" onClick={this.favoriteEvent}><i className="far fa-star"></i></button>
                )
              }
              <button className="btn btn-danger" onClick={this.deleteMovieEvent}><i className="fas fa-trash-alt"></i></button>
            </div>
          </div>
    );
  }
}

export default CollectionCard;
