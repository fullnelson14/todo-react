const initState = {
  counters: [],
  numCounters: 0,
  lists: []
};

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

    case "ADD_LIST":
      return {
        ...state,
        lists: [...state.lists, { tasks: {} }]
      };
    default:
      return state;
  }
}

export default reducer;
