import store from "../store";
import * as types from "../actionTypes/types";

export const loginUser = (loginData) => {
  return {
    type: types.LOGIN_USER,
    payload: {
      loginData,
    },
  };
};

export const registerUser = (registerData) => {
  return {
    type: types.REGISTER_USER,
    payload: {
      registerData,
    },
  };
};
