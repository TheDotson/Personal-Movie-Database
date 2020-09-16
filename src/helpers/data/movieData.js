import axios from 'axios';
import apiKeys from '../apiKeys.json';

const tmdbKey = apiKeys.tmdbConfig.apiKey;

const getMovies = (movieQuery) => new Promise((resolve, reject) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&language=en-US&query=${movieQuery}&page=1&include_adult=false`)
    .then((response) => {
      const searchResults = response.data.results;
      const movies = [];
      searchResults.forEach((searchResult) => {
        if (searchResult) {
          movies.push(searchResult);
        }
      });
      resolve(movies);
    })
    .catch((err) => reject(err));
});

export default { getMovies };
