import React from 'react';
import _ from 'underscore';
import authData from '../../../helpers/data/authData';
import collectionData from '../../../helpers/data/collectionData';
import CollectionCard from '../../shared/CollectionCard/CollectionCard';
import './Collection.scss';

class Collection extends React.Component {
  state = {
    collection: [],
  }

  getCollection = () => {
    collectionData.getCollectionByUid(authData.getUid())
      .then((collection) => this.setState({ collection }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getCollection();
  }

  deleteMovie = (movieId) => {
    collectionData.deleteMovie(movieId)
      .then(() => {
        this.getCollection();
      })
      .catch((err) => console.error('Delete movie failed', err));
  }

  updateMovie = (movieId, editedMovie) => {
    collectionData.updateMovie(movieId, editedMovie)
      .then(() => {
        this.getCollection();
      })
      .catch((err) => console.error('Update movie failed', err));
  }

  render() {
    const { collection } = this.state;
    const collectionCards = _.sortBy(collection, 'title').map((movie) => <CollectionCard key={movie.id} movie={movie} deleteMovie={this.deleteMovie} updateMovie={this.updateMovie} />);
    return (
      <div>
        <h1 className="headline">My Collection</h1>
        <div className="collection">
          {collectionCards}
        </div>
      </div>
    );
  }
}

export default Collection;
