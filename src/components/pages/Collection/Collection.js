import React from 'react';
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

  render() {
    const { collection } = this.state;
    const collectionCards = collection.map((movie) => <CollectionCard key={movie.id} movie={movie} deleteMovie={this.deleteMovie}/>);
    return (
      <div className="collection">
        <h1>My Collection</h1>
        {collectionCards}
      </div>
    );
  }
}

export default Collection;
