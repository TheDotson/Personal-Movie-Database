import React from 'react';
import { toast } from 'react-toastify';
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
    toast.success(`${movie.title} has been added to your collection.`, { position: toast.POSITION.TOP_CENTER });
  }

  render() {
    const { movie } = this.props;
    const moviePoster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    return (
      <div className="card">
        <img className="card-img-top poster-image" src={moviePoster} alt={movie.title}></img>
        <div className="card-footer collection-button">
          <button className="btn btn-primary" onClick={this.addToCollection}>Add to Collection</button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
