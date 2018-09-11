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
          {
            id: state.numLists,
            hasTitle: false,
            title: "",
            numTasks: 0,
            tasks: []
          }
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

    case "REMOVE_LIST":
      return {
        ...state,
        listArray: state.listArray.filter(e => e.id !== action.id)
      };

    case "ADD_TASK_TEXT":
      return {
        ...state,
        listArray: state.listArray.map(list => {
          if (list.id === action.id) {
            list.tasks = [
              ...list.tasks,
              { taskId: list.numTasks++, taskText: action.text }
            ];
          }
          return list;
        })
      };
    default:
      return state;
  }
}

export default listReducer;
