import { combineReducers } from "@reduxjs/toolkit";
import React from "react";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userReducer,
});
export default rootReducer;
