import { all } from "redux-saga/effects";
import AuthSaga from "./authSaga";
import MovieSaga from "./movieSaga";

function* rootSaga() {
  yield all([
    //ovde idu sage..
    AuthSaga(),
    MovieSaga(),
  ]);
}
export default rootSaga;
