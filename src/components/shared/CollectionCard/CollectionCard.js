import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
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
    toast.error(`${movie.title} has been deleted from your collection.`, { position: toast.POSITION.TOP_CENTER });
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
      dvd: movie.dvd,
      bluray: movie.bluray,
    };
    updateMovie(movie.id, updatedMovie);
    toast.info(`${movie.title} has been marked as watched.`, { position: toast.POSITION.TOP_CENTER });
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
      dvd: movie.dvd,
      bluray: movie.bluray,
    };
    updateMovie(movie.id, updatedMovie);
    toast.info(`${movie.title} has been marked as unwatched.`, { position: toast.POSITION.TOP_CENTER });
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
      dvd: movie.dvd,
      bluray: movie.bluray,
    };
    updateMovie(movie.id, updatedMovie);
    toast.info(`${movie.title} has been marked as a favorite.`, { position: toast.POSITION.TOP_CENTER });
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
      dvd: movie.dvd,
      bluray: movie.bluray,
    };
    updateMovie(movie.id, updatedMovie);
    toast.info(`${movie.title} has been removed as a favorite.`, { position: toast.POSITION.TOP_CENTER });
  }

  render() {
    const { movie } = this.props;
    const viewMovieLink = `/view/${movie.id}`;
    const moviePoster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    return (
          <div className="card">
            <img className="card-img-top poster-image" src={moviePoster} alt={movie.title}></img>
            <div className="card-footer">
              <Link to={viewMovieLink} className="btn btn-primary"><i className="fas fa-list-ul"></i></Link>
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
