import user from "./user";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
const reducer = combineReducers({
  user,
});
const store = configureStore({
  reducer,
});
export default store;
