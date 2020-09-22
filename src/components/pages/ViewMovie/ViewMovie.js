import React from 'react';
import collectionData from '../../../helpers/data/collectionData';
import './ViewMovie.scss';

class ViewMovie extends React.Component {
  state = {
    movie: [],
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    collectionData.getMovieById(movieId)
      .then((res) => this.setState({ movie: res.data }))
      .catch((err) => console.error(err));
  }

  updateMovie = (movieId, editedMovie) => {
    collectionData.updateMovie(movieId, editedMovie)
      .then(() => {
        collectionData.getMovieById(movieId)
          .then((res) => this.setState({ movie: res.data }))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error('Update movie failed', err));
  }

  blurayEvent = (e) => {
    const { movie } = this.state;
    const { movieId } = this.props.match.params;
    const updatedMovie = {
      favorite: movie.favorite,
      movieId: movie.movieId,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      uid: movie.uid,
      watched: movie.watched,
      bluray: true,
      dvd: movie.dvd,
      google: movie.google,
      iTunes: movie.iTunes,
      prime: movie.prime,
    };
    this.updateMovie(movieId, updatedMovie);
  }

  dvdEvent = (e) => {
    const { movie } = this.state;
    const { movieId } = this.props.match.params;
    const updatedMovie = {
      favorite: movie.favorite,
      movieId: movie.movieId,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      uid: movie.uid,
      watched: movie.watched,
      bluray: movie.bluray,
      dvd: true,
      google: movie.google,
      iTunes: movie.iTunes,
      prime: movie.prime,
    };
    this.updateMovie(movieId, updatedMovie);
  }

  googleEvent = (e) => {
    const { movie } = this.state;
    const { movieId } = this.props.match.params;
    const updatedMovie = {
      favorite: movie.favorite,
      movieId: movie.movieId,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      uid: movie.uid,
      watched: movie.watched,
      bluray: movie.bluray,
      dvd: movie.dvd,
      google: true,
      iTunes: movie.iTunes,
      prime: movie.prime,
    };
    this.updateMovie(movieId, updatedMovie);
  }

  iTunesEvent = (e) => {
    const { movie } = this.state;
    const { movieId } = this.props.match.params;
    const updatedMovie = {
      favorite: movie.favorite,
      movieId: movie.movieId,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      uid: movie.uid,
      watched: movie.watched,
      bluray: movie.bluray,
      dvd: movie.dvd,
      google: movie.google,
      iTunes: true,
      prime: movie.prime,
    };
    this.updateMovie(movieId, updatedMovie);
  }

  primeEvent = (e) => {
    const { movie } = this.state;
    const { movieId } = this.props.match.params;
    const updatedMovie = {
      favorite: movie.favorite,
      movieId: movie.movieId,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      uid: movie.uid,
      watched: movie.watched,
      bluray: movie.bluray,
      dvd: movie.dvd,
      google: movie.google,
      iTunes: movie.iTunes,
      prime: true,
    };
    this.updateMovie(movieId, updatedMovie);
  }

  render() {
    const { movie } = this.state;
    const moviePoster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    return (
      <div className="view-movie">
        <div className="single-movie">
          <img className="single-img" src={moviePoster} alt={movie.title}></img>
          <div>
            <h1>{movie.title}</h1>
            <h4 className="details">Released: {movie.release_date}</h4>
            <h4 className="details">Overview</h4>
            <p className="overview details">{movie.overview}</p>
          </div>
          <div className="card-footer text-center format-select">
            <p>Format Owned:</p>
            <div class="form-check">
              <input className="form-check-input" type="checkbox" value="blu-ray" id="bluray-check" checked={movie.bluray} onChange={this.blurayEvent}/>
              <label className="form-check-label" for="bluray-check">Blu-ray</label>
            </div>
            <div class="form-check">
              <input className="form-check-input" type="checkbox" value="dvd" id="dvd-check" checked={movie.dvd} onChange={this.dvdEvent}/>
              <label className="form-check-label" for="dvd-check">DVD</label>
            </div>
            <div class="form-check">
              <input className="form-check-input" type="checkbox" value="google-play" id="google-check" checked={movie.google} onChange={this.googleEvent}/>
              <label className="form-check-label" for="google-check">Google Play</label>
            </div>
            <div class="form-check">
              <input className="form-check-input" type="checkbox" value="iTunes" id="itunes-check" checked={movie.iTunes} onChange={this.iTunesEvent}/>
              <label className="form-check-label" for="itunes-check">iTunes</label>
            </div>
            <div class="form-check">
              <input className="form-check-input" type="checkbox" value="prime-video" id="prime-check" checked={movie.prime} onChange={this.primeEvent}/>
              <label className="form-check-label" for="prime-check">Prime Video</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewMovie;
