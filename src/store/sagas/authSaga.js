import { call, put, takeEvery } from "redux-saga/effects";
import authService from "../../services/authService";
import * as types from "../actionTypes/types";
import {
  loginSuccesss,
  loginError,
  registerError,
  registerSucces,
} from "../actions/userActions";
function* LogIn({ payload }) {
  try {
    const user = yield call(authService.login, payload.loginData);

    yield put(loginSuccesss(user));
  } catch (exception) {
    yield put(loginError(exception.message));
  }
}

function* Register({ payload }) {
  try {
    const response = yield call(authService.register, payload.registerData);
    yield put(registerSucces);
  } catch (exception) {
    yield put(registerError(exception.message));
  }
}

function* AuthSaga() {
  yield takeEvery(types.LOGIN_USER, LogIn);
  yield takeEvery(types.REGISTER_USER, Register);
}
export default AuthSaga;
