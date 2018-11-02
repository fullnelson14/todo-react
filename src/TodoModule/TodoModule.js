import React from "react";
import { connect } from "react-redux";
import List from "./components/list";

class TodoModule extends React.Component {
  render() {
    return (
      <div className="todo">
        <div className="header-row">
          <h4>TODO:</h4>
          <button onClick={this.props.addList}>Add List</button>
        </div>
        {this.props.lists.map(e => {
          return <List id={e.id} key={e.id} />;
        })}
      </div>
    );
  }
}

const TodoModuleContainer = connect(
  state => {
    return {
      lists: state.lists.listArray
    };
  },
  dispatch => {
    return {
      addList: () => dispatch({ type: "ADD_LIST" })
    };
  }
)(TodoModule);

export default TodoModuleContainer;
