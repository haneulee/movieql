import fetch from "node-fetch";
const MOVIE_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = (limit, rating) =>
  fetch(`${MOVIE_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
