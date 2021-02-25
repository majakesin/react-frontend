import * as types from "../actionTypes/types";

export const getMovies = (nextOrPrevious, title, genre) => {
  return {
    type: types.MOVIES_GET,
    nextOrPrevious,
    title,
    genre,
  };
};

export const getMoviesSuccess = (movies, next, previous) => {
  return {
    type: types.MOVIES_GET_SUCCESS,
    movies,
    next,
    previous,
  };
};

export const getMoviesError = (message) => {
  return {
    type: types.MOVIES_GET_ERROR,
    message,
  };
};

export const createMovie = (values, selectedGenres) => {
  return {
    type: types.MOVIE_CREATE,
    values,
    selectedGenres,
  };
};

export const createMovieSucces = (movie) => {
  return {
    type: types.MOVIES_GET_SUCCESS,
    //kontam ne treba nista, vidice se u listi da je sacuvan zbog baze
  };
};
export const createMovieError = (message) => {
  return {
    type: types.MOVIES_GET_ERROR,
    message,
  };
};

export const getOneMovie = (id) => {
  return {
    type: types.GET_ONE_MOVIE,
    id,
  };
};

export const getOneMovieSuccess = (movie) => {
  return {
    type: types.GET_ONE_MOVIE_SUCCESS,
    movie,
  };
};

export const getOneMovieError = (message) => {
  return {
    type: types.GET_ONE_MOVIE_ERROR,
  };
};

//za zanrove
export const getGenres = () => {
  return {
    type: types.GET_GENRES,
  };
};

export const getGenresSuccess = (genres) => {
  return {
    type: types.GET_GENRES_SUCCESS,
    genres,
  };
};

export const getGenresError = (message) => {
  return {
    type: types.GET_GENRES_ERROR,
    message,
  };
};

//movie like dislike

export const movieLikeDislike = (movie, flag) => {
  return {
    type: types.LIKE_DISLIKE_MOVIE,
    movie,
    flag,
  };
};

export const MovieLikeDislikeSuccess = () => {
  return {
    type: types.LIKE_DISLIKE_SUCCESS,
  };
};

export const MovieLikeDislikeError = (message) => {
  return {
    type: types.LIKE_DISLIKE_ERROR,
  };
};

// za preuzimanje lajkova dislajkova
export const getLikesDislikes = (movie_id) => {
  return {
    type: types.GET_LIKES_DISLIKES,
    movie_id,
  };
};
export const getLikesDislikesSuccess = (likes, dislikes) => {
  return {
    type: types.GET_LIKES_DISLIKES_SUCCESS,
    likes,
    dislikes,
  };
};

export const getLikesDislikesError = (message) => {
  return {
    type: types.GET_LIKES_DISLIKES_ERROR,
    message,
  };
};
