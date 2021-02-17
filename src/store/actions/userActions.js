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

export const loginSuccesss = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    user: user,
  };
};

export const loginError = (message) => {
  return {
    type: types.LOGIN_ERROR,
    message,
  };
};

export const registerSucces = () => {
  return {
    type: types.REGISTER_SUCCESS,
  };
};

export const registerError = (message) => {
  return {
    type: types.REGISTER_ERROR,
    message,
  };
};
