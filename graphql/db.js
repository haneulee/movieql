import axios from "axios";
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIES_DETAIL_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTION_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOIVES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIES_DETAIL_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestion = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTION_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};
