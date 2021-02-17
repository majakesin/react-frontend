import { call, put, takeEvery } from "redux-saga/effects";
import authService from "../../services/authService";
import * as types from "../actionTypes/types";

function* LogIn(action) {
  try {
    const user = yield call(authService.login, action.payload.loginData);

    yield put({ type: types.LOGIN_SUCCESS, user: user });
  } catch (exception) {
    yield put({ type: types.LOGIN_ERROR, message: exception.message });
  }
}

function* Register(action) {
  try {
    const response = yield call(
      authService.register,
      action.payload.registerData
    );
    yield put({ type: types.REGISTER_SUCCESS });
  } catch (exception) {
    yield put({ type: types.REGISTER_ERROR, message: exception.message });
  }
}

function* AuthSaga() {
  yield takeEvery(types.LOGIN_USER, LogIn);
  yield takeEvery(types.REGISTER_USER, Register);
}
export default AuthSaga;
