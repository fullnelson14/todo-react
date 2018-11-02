const counterInitState = {
  counterArray: [],
  numCounters: 0
};

function counterReducer(state = counterInitState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counterArray: state.counterArray.map(
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
        counterArray: state.counterArray.map(
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
        counterArray: [
          ...state.counterArray,
          { count: 0, id: state.numCounters }
        ],
        numCounters: state.numCounters + 1
      };
    case "REMOVE_COUNTER":
      return {
        ...state,
        counterArray: state.counterArray.filter(e => e.id !== action.id)
      };
    default:
      return state;
  }
}

export default counterReducer;
