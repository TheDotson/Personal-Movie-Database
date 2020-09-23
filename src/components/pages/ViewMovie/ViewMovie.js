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

  removeBlurayEvent = (e) => {
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
      bluray: false,
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

  removeDvdEvent = (e) => {
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
      dvd: false,
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

  removeGoogleEvent = (e) => {
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
      google: false,
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

  removeiTunesEvent = (e) => {
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
      iTunes: false,
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

  removePrimeEvent = (e) => {
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
      prime: false,
    };
    this.updateMovie(movieId, updatedMovie);
  }

  render() {
    const { movie } = this.state;
    const moviePoster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    return (
      <div className="view-movie">
        <div className="single-movie">
          <img className="single-img mb-3" src={moviePoster} alt={movie.title}></img>
          <div>
            <h1 className="headline details mb-0">{movie.title}</h1>
            <h4 className="details mb-0">Released: {movie.release_date}</h4>
            <h4 className="details mb-0">Overview</h4>
            <p className="overview details">{movie.overview}</p>
          </div>
          <div className="card-footer text-center format-select">
            <h8 className="mb-0">Format Owned:</h8>
            <div className="form-check mb-3">
              {
                movie.bluray ? (
                  <input className="form-check-input mb-0" type="checkbox" value="blu-ray" id="bluray-check" checked={movie.bluray} onChange={this.removeBlurayEvent}/>
                ) : (
                  <input className="form-check-input mb-0" type="checkbox" value="blu-ray" id="bluray-check" checked={movie.bluray} onChange={this.blurayEvent}/>
                )
              }
              <label className="form-check-label mb-0" for="bluray-check">Blu-ray</label>
            </div>
            <div class="form-check mb-0">
              {
                movie.dvd ? (
                  <input className="form-check-input mb-0" type="checkbox" value="dvd" id="dvd-check" checked={movie.dvd} onChange={this.removeDvdEvent}/>
                ) : (
                  <input className="form-check-input mb-0" type="checkbox" value="dvd" id="dvd-check" checked={movie.dvd} onChange={this.dvdEvent}/>
                )
              }
              <label className="form-check-label mb-0" for="dvd-check">DVD</label>
            </div>
            <div class="form-check mb-0">
              {
                movie.google ? (
                  <input className="form-check-input mb-0" type="checkbox" value="google-play" id="google-check" checked={movie.google} onChange={this.removeGoogleEvent}/>
                ) : (
                  <input className="form-check-input mb-0" type="checkbox" value="google-play" id="google-check" checked={movie.google} onChange={this.googleEvent}/>
                )
              }
              <label className="form-check-label mb-0" for="google-check">Google Play</label>
            </div>
            <div class="form-check mb-0">
              {
                movie.iTunes ? (
                  <input className="form-check-input mb-0" type="checkbox" value="iTunes" id="itunes-check" checked={movie.iTunes} onChange={this.removeiTunesEvent}/>
                ) : (
                  <input className="form-check-input mb-0" type="checkbox" value="iTunes" id="itunes-check" checked={movie.iTunes} onChange={this.iTunesEvent}/>
                )
              }
              <label className="form-check-label mb-0" for="itunes-check">iTunes</label>
            </div>
            <div class="form-check mb-0">
              {
                movie.prime ? (
                  <input className="form-check-input mb-0" type="checkbox" value="prime-video" id="prime-check" checked={movie.prime} onChange={this.removePrimeEvent}/>
                ) : (
                  <input className="form-check-input mb-0" type="checkbox" value="prime-video" id="prime-check" checked={movie.prime} onChange={this.primeEvent}/>
                )
              }
              <label className="form-check-label mb-0" for="prime-check">Prime Video</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewMovie;
