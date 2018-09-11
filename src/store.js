import { applyMiddleware, createStore, combineReducers } from "redux";
import listReducer from "./reducers/listReducer";
import counterReducer from "./reducers/counterReducer";
import logger from "redux-logger";

const store = createStore(
  combineReducers({ counters: counterReducer, lists: listReducer }),
  applyMiddleware(logger)
);

export default store;
