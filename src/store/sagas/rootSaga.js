import { all } from "redux-saga/effects";
import AuthSaga from "./authSaga";

function* rootSaga() {
  yield all([
    //ovde idu sage..
    AuthSaga(),
  ]);
}
export default rootSaga;
