import axios from "axios";

const API_KEY = "e4fdc6726ee8324bdaef51061bd0ec10";
const base_url = "https://image.tmdb.org/t/p/";

const tmdb = axios.create({ baseURL: "https://api.themoviedb.org/3" });

const request = {
  getPopular: `movie/popular?api_key=${API_KEY}`,
  getTopRated: `movie/top_rated?api_key=${API_KEY}`,
  getUpcoming: `movie/upcoming?api_key=${API_KEY}`,
  getMovie(id) {
    return `movie/${id}?api_key=${API_KEY}`;
  },
};

export { request, base_url, tmdb };
