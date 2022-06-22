import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://imdb-api.com/',
  headers: { Accept: 'application/json' }
});

const getComingSoonMovies = () => {
  return instance.get(`/en/API/ComingSoon/${process.env.REACT_APP_IMDB_KEY}`);
};

const getTopMovies = () => {
  return instance.get(`/en/API/Top250Movies/${process.env.REACT_APP_IMDB_KEY}`);
};

const getMostPopularMovies = () => {
  return instance.get(
    `/en/API/MostPopularMovies/${process.env.REACT_APP_IMDB_KEY}`
  );
};

const getMovieById = (id: string) => {
  return instance.get(
    `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_IMDB_KEY}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings`
  );
};

const searchMoviesByExpression = (expression: string) => {
  return instance.get(
    `https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_IMDB_KEY}/${expression}`
  );
};

export {
  getComingSoonMovies,
  getTopMovies,
  getMostPopularMovies,
  getMovieById,
  searchMoviesByExpression
};
