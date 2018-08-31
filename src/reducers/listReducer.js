const listInitState = {
  listArray: [],
  numLists: 0
};

function listReducer(state = listInitState, action) {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        listArray: [
          ...state.listArray,
          { id: state.numLists, hasTitle: false, title: "", tasks: [] }
        ],
        numLists: state.numLists + 1
      };

    case "ADD_LIST_TITLE":
      return {
        ...state,
        listArray: state.listArray.map(list => {
          if (list.id === action.id) {
            list.title = action.title;
            list.hasTitle = true;
          }
          return list;
        })
      };
    default:
      return state;
  }
}

export default listReducer;
