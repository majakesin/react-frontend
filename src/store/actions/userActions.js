import store from "../store";
import * as types from "../actionTypes/types";

export const loginUser = (loginData) => {
  store.dispatch({
    type: types.LOGIN_USER,
    payload: {
      loginData: loginData,
    },
  });
};

export const registerUser = (registerData) => {
  store.dispatch({
    type: types.REGISTER_USER,
    payload: {
      registerData: registerData,
    },
  });
};
