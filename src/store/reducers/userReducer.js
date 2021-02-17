import { actionChannel } from "redux-saga/effects";
import * as types from "../actionTypes/types";

const initialState = {
  user: null,
  register: false,
  message: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state };
    case types.LOGIN_SUCCESS:
      return { ...state, user: action.user };
    case types.LOGIN_ERROR:
      return { ...state, message: action.message };
    case types.REGISTER_USER:
      return { ...state, register: false };
    case types.REGISTER_SUCCESS:
      return { ...state, register: true };
    case types.REGISTER_ERROR:
      return { ...state, message: action.message };
    default:
      return state;
  }
}
export default userReducer;
