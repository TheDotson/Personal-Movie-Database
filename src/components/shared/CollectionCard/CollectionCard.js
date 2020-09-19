import React from 'react';
import './CollectionCard.scss';

class CollectionCard extends React.Component {
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
          <i className="fas fa-eye"></i>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>

    );
  }
}

export default CollectionCard;
