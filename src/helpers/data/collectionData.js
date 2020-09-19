import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getCollectionByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/collection.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const collectionObj = response.data;
      const collection = [];
      if (collection) {
        Object.keys(collectionObj).forEach((collId) => {
          collectionObj[collId].id = collId;
          collection.push(collectionObj[collId]);
        });
      }
      resolve(collection);
    })
    .catch((err) => reject(err));
});

const addMovie = (newMovie) => axios.post(`${baseUrl}/collection.json`, newMovie);

const deleteMovie = (movieId) => axios.delete(`${baseUrl}/collection/${movieId}.json`);

export default {
  getCollectionByUid,
  addMovie,
  deleteMovie,
};
