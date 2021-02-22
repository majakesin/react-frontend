import * as types from "../actionTypes/types";

let initialState = {
  movies: [],
  movie: null,
  message: null,
  genres: [],
  movie_create: false,
};
function movieReducer(state = initialState, action) {
  switch (action.type) {
    case types.MOVIES_GET:
      return { ...state };
    case types.MOVIES_GET_SUCCESS:
      return { ...state, movies: action.movies };
    case types.MOVIES_GET_ERROR:
      return { ...state, message: action.message };
    case types.GET_ONE_MOVIE:
      return { ...state };
    case types.GET_ONE_MOVIE_SUCCESS:
      return { ...state, movie: action.movie };
    case types.GET_ONE_MOVIE_ERROR:
      return { ...state, message: action.message };
    case types.GET_GENRES:
      return { ...state };
    case types.GET_GENRES_SUCCESS:
      return { ...state, genres: action.genres };
    case types.GET_GENRES_ERROR:
      return { ...state, message: action.message };
    case types.MOVIE_CREATE:
      return { ...state };
    case types.MOVIE_CREATE_SUCCESS:
      return { ...state, movie_create: true };
    case types.MOVIE_CREATE_ERROR:
      return { ...state, message: action.message };
    default:
      return state;
  }
}
export default movieReducer;