import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://imdb-api.com/',
    headers: {'Accept': 'application/json'}
});


const getComingSoonMovies = async () => {
    return await instance.get(`/en/API/ComingSoon/${process.env.REACT_APP_IMDB_KEY}`)
}

const getTopMovies = async () => {
    return await instance.get(`/en/API/Top250Movies/${process.env.REACT_APP_IMDB_KEY}`)
}

const getMostPopularMovies = async () => {
    return await instance.get(`/en/API/MostPopularMovies/${process.env.REACT_APP_IMDB_KEY}`)
}

const getMovieById = async (id: string) => {
    return await instance.get(`https://imdb-api.com/en/API/Title/${process.env.REACT_APP_IMDB_KEY}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings`)
}

export { getComingSoonMovies, getTopMovies, getMostPopularMovies, getMovieById }


