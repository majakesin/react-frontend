import * as types from "../actionTypes/types";
import { call, put, take, takeEvery } from "redux-saga/effects";
import {
  createMovieError,
  getGenresError,
  getGenresSuccess,
  getMoviesError,
  getMoviesSuccess,
  getOneMovieError,
  getOneMovieSuccess,
} from "../actions/movieActions";
import movieService from "../../services/movieService";

function* Movies() {
  try {
    const movies = yield call(movieService.movies);
    yield put(getMoviesSuccess(movies));
  } catch (exception) {
    yield put(getMoviesError(exception.message));
  }
}

function* CreateMovie({ movieData }) {
  try {
    const response = yield call(movieService.createMovie, movieData);
  } catch (exception) {
    yield put(createMovieError(exception.movie));
  }
}

function* GetOne({ id }) {
  try {
    const movie = yield call(movieService.oneMovie, id);
    yield put(getOneMovieSuccess(movie));
  } catch (exception) {
    yield put(getOneMovieError(exception.message));
  }
}

function* GetGenres() {
  try {
    const genres = yield call(movieService.genres);
    yield put(getGenresSuccess(genres));
  } catch (exception) {
    yield put(getGenresError(exception.message));
  }
}

function* MovieSaga() {
  yield takeEvery(types.MOVIES_GET, Movies);
  yield takeEvery(types.GET_ONE_MOVIE, GetOne);
  yield takeEvery(types.GET_GENRES, GetGenres);
  yield takeEvery(types.MOVIE_CREATE, CreateMovie);
}
export default MovieSaga;
