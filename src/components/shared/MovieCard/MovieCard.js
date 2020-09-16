import React from 'react';
import './MovieCard.scss';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="card">
        <div className="card-body">
        <div className="card-title">
          <h4 className="text-center">{movie.title}</h4>
        </div>
        </div>
        <div className="card-footer">
        </div>
      </div>
    );
  }
}

export default MovieCard;
