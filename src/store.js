import { createStore, combineReducers } from "redux";
import listReducer from "./reducers/listReducer";
import counterReducer from "./reducers/counterReducer";

const store = createStore(
  combineReducers({ counters: counterReducer, lists: listReducer })
);

export default store;
