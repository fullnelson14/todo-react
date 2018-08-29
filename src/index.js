import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initState = {
  counters: [],
  numCounters: 0
};
const store = createStore(reducer);

function reducer(state = initState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counters: state.counters.map(
          counter =>
            counter.id === action.id
              ? {
                  ...counter,
                  count: counter.count + 1
                }
              : counter
        )
      };

    case "DECREMENT":
      return {
        ...state,
        counters: state.counters.map(
          counter =>
            counter.id === action.id
              ? {
                  ...counter,
                  count: counter.count - 1
                }
              : counter
        )
      };
    case "ADD_COUNTER":
      return {
        ...state,
        counters: [...state.counters, { count: 0, id: state.numCounters }],
        numCounters: state.numCounters + 1
      };
    case "REMOVE_COUNTER":
      return {
        ...state,
        counters: state.counters.filter(e => {
          return e.id !== action.id;
        })
      };
    default:
      return state;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
