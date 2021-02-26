import * as types from "../actionTypes/types";
import { call, put, take, takeEvery } from "redux-saga/effects";
import {
  createCommentError,
  createCommentSucces,
  createMovieError,
  getCommentsError,
  getCommentsSuccess,
  getGenresError,
  getGenresSuccess,
  getLikesDislikesError,
  getLikesDislikesSuccess,
  getMoviesError,
  getMoviesSuccess,
  getOneMovieError,
  getOneMovieSuccess,
  getPopularMoviesError,
  getPopularMoviesSuccess,
  getRelatedMoviesError,
  getRelatedMoviesSuccess,
  incremenetMovieViewError,
  incrementMovieViewSuccess,
  MovieLikeDislikeError,
  MovieLikeDislikeSuccess,
  watchedMovieError,
  watchedMovieSuccess,
} from "../actions/movieActions";
import movieService from "../../services/movieService";

function* Movies({ nextOrPrevious, title, genre }) {
  try {
    const { data } = yield call(
      movieService.movies,
      nextOrPrevious,
      title,
      genre
    );
    yield put(getMoviesSuccess(data.results, data.next, data.previous));
  } catch (exception) {
    yield put(getMoviesError(exception.message));
  }
}
function* LikeDislike({ movie, flag }) {
  try {
    yield call(movieService.likeDislike, movie, flag);
    yield put(MovieLikeDislikeSuccess());
  } catch (exception) {
    yield put(MovieLikeDislikeError(exception.message));
  }
}
function* CreateMovie({ values, selectedGenres }) {
  try {
    const response = yield call(
      movieService.createMovie,
      values,
      selectedGenres
    );
  } catch (exception) {
    yield put(createMovieError(exception.message));
    console.log(exception);
  }
}

function* GetOne({ id }) {
  try {
    const data = yield call(movieService.oneMovie, id);
    yield put(getOneMovieSuccess(data));
  } catch (exception) {
    yield put(getOneMovieError(exception.message));
  }
}

function* getLikesDislikeForMovie({ movie_id }) {
  try {
    const { data } = yield call(movieService.getLikesDislikes, movie_id);
    yield put(getLikesDislikesSuccess(data.likes, data.dislikes));
  } catch (exception) {
    yield put(getLikesDislikesError(exception.message));
  }
}

function* GetGenres() {
  try {
    const { data } = yield call(movieService.genres);
    yield put(getGenresSuccess(data));
  } catch (exception) {
    yield put(getGenresError(exception.message));
  }
}

function* createComment({ comment, movie_id }) {
  try {
    yield call(movieService.createComment, comment, movie_id);
    yield put(createCommentSucces());
  } catch (exception) {
    yield put(createCommentError(exception.message));
  }
}

function* getComments({ nextOrPrevious, movie_id }) {
  try {
    const { data } = yield call(
      movieService.getComments,
      nextOrPrevious,
      movie_id
    );
    yield put(getCommentsSuccess(data.results, data.next, data.previous));
  } catch (exception) {
    yield put(getCommentsError(exception.message));
  }
}

function* WatchedMovie({ movie_id }) {
  try {
    yield call(movieService.watchedMovies, movie_id);
    yield put(watchedMovieSuccess(movie_id));
  } catch (exception) {
    yield put(watchedMovieError(exception.message));
  }
}

function* getPopularMovies() {
  try {
    const { data } = yield call(movieService.getPopularMovies);
    yield put(getPopularMoviesSuccess(data));
  } catch (exception) {
    yield put(getPopularMoviesError(exception.message));
  }
}

function* GetRelatedMovies({ genres }) {
  try {
    const data = yield call(movieService.relatedMovies, genres);
    yield put(getRelatedMoviesSuccess(data));
  } catch (exception) {
    yield put(getRelatedMoviesError(exception.mesaage));
  }
}

function* MovieSaga() {
  yield takeEvery(types.MOVIES_GET, Movies);
  yield takeEvery(types.GET_ONE_MOVIE, GetOne);
  yield takeEvery(types.GET_GENRES, GetGenres);
  yield takeEvery(types.MOVIE_CREATE, CreateMovie);
  yield takeEvery(types.LIKE_DISLIKE_MOVIE, LikeDislike);
  yield takeEvery(types.GET_LIKES_DISLIKES, getLikesDislikeForMovie);
  yield takeEvery(types.CREATE_COMMENT, createComment);
  yield takeEvery(types.GET_COMMENTS, getComments);
  yield takeEvery(types.WATCHED_MOVIE, WatchedMovie);
  yield takeEvery(types.GET_POPULAR_MOVIES, getPopularMovies);
  yield takeEvery(types.GET_RELATED_MOVIES, GetRelatedMovies);
}
export default MovieSaga;
