import * as types from "../actionTypes/types";

let initialState = {
  movies: [],
  movie: null,
  message: null,
  genres: [],
  movie_create: false,
  next: null,
  previous: null,
  likeDislike: null,
  likes: null,
  dislikes: null,
  comment_create: false,
  comments: [],
  popularMovies: [],
  relatedMovies: [],
  OMDBMovie: null,
};
function movieReducer(state = initialState, action) {
  switch (action.type) {
    case types.MOVIES_GET:
      return { ...state };
    case types.MOVIES_GET_SUCCESS:
      return {
        ...state,
        ...action,
      };
    case types.MOVIES_GET_ERROR:
      return { ...state, message: action.message };
    case types.GET_ONE_MOVIE:
      return { ...state, movie: action.movie };
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
    case types.LIKE_DISLIKE_MOVIE:
      return state;
    case types.LIKE_DISLIKE_SUCCESS:
      return { ...state, likeDislike: true };
    case types.LIKE_DISLIKE_ERROR:
      return { ...state, message: action.message };
    case types.GET_LIKES_DISLIKES:
      return state;
    case types.GET_LIKES_DISLIKES_SUCCESS:
      return { ...state, likes: action.likes, dislikes: action.dislikes };
    case types.GET_LIKES_DISLIKES_ERROR:
      return { ...state, message: action.message };
    case types.CREATE_COMMENT:
      return state;
    case types.CREATE_COMMENT_SUCCESS:
      return { ...state, create_comment: true };
    case types.CREATE_COMMENT_ERROR:
      return { ...state, message: action.message };
    case types.GET_COMMENTS:
      return state;
    case types.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        ...action,
      };
    case types.GET_COMMENTS_ERROR:
      return { ...state, message: action.message };
    case types.WATCHED_MOVIE:
      return state;
    case types.WATCHED_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.movie_id ? { ...movie, watched: true } : movie
        ),
      };
    case types.WATCHED_MOVIE_ERROR:
      return { ...state, message: action.message };
    case types.GET_POPULAR_MOVIES:
      return state;
    case types.GET_POPULAR_MOVIES_SUCCESS: {
      let popularMovies = action.movies;
      popularMovies.sort((item1, item2) =>
        item1.likes < item2.likes ? 1 : -1
      );
      return { ...state, popularMovies: popularMovies.slice(0, 5) };
    }
    case types.GET_POPULAR_MOVIES_ERROR:
      return { ...state, message: action.message };
    case types.GET_RELATED_MOVIES:
      return state;
    case types.GET_RELATED_MOVIES_SUCCESS: {
      return { ...state, relatedMovies: action.movies.slice(0, 10) };
    }
    case types.GET_RELATED_MOVIES_ERROR:
      return { ...state, message: action.message };
    case types.GET_OMDB_MOVIE:
      return state;
    case types.GET_OMDB_MOVIE_SUCCESS:
      return { ...state, OMDBMovie: action.movie };
    case types.GET_OMDB_MOVIE_ERROR:
      return { ...state, message: action.message };
    case types.REMOVE_OMDB_MOVIE:
      return { ...state, OMDBMovie: null };
    default:
      return state;
  }
}
export default movieReducer;
