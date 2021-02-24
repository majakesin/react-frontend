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
    const { data } = yield call(movieService.oneMovie, id);
    yield put(getOneMovieSuccess(data));
  } catch (exception) {
    yield put(getOneMovieError(exception.message));
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

function* MovieSaga() {
  yield takeEvery(types.MOVIES_GET, Movies);
  yield takeEvery(types.GET_ONE_MOVIE, GetOne);
  yield takeEvery(types.GET_GENRES, GetGenres);
  yield takeEvery(types.MOVIE_CREATE, CreateMovie);
}
export default MovieSaga;
