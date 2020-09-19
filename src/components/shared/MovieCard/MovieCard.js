import React from 'react';
import collectionData from '../../../helpers/data/collectionData';
import authData from '../../../helpers/data/authData';
import './MovieCard.scss';

class MovieCard extends React.Component {
  addToCollection = (e) => {
    e.preventDefault();
    const { movie } = this.props;
    const newMovie = {
      favorite: false,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      uid: authData.getUid(),
      watched: false,
      dvd: movie.dvd,
      bluray: movie.bluray,
    };
    collectionData.addMovie(newMovie)
      .then()
      .catch((err) => console.error('Add movies failed', err));
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
          <i className="fas fa-plus-circle" onClick={this.addToCollection}></i>
        </div>
      </div>
    );
  }
}

export default MovieCard;
