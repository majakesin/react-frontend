import { combineReducers } from "@reduxjs/toolkit";
import React from "react";
import userReducer from "./userReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  user: userReducer,
  movies: movieReducer,
});
export default rootReducer;
