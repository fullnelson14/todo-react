import React from "react";
import { connect } from "react-redux";
import InputBox from "./inputBox";
import TaskInputBox from "./taskInputBox";

class List extends React.Component {
  render() {
    let listTitle = this.props.lists.find(e => e.id === this.props.id).title;
    return (
      <div className="list">
        <div className="title-row">
          {this.props.lists.find(e => e.id === this.props.id).hasTitle ? (
            ""
          ) : (
            <InputBox
              placeholder="Enter title for todo list"
              todoId={this.props.id}
              classes="title-input"
            />
          )}

          <h1>{listTitle}</h1>

          <button
            className="remove-button"
            onClick={() => this.props.removeList(this.props.id)}
          >
            X
          </button>
        </div>
        <div className="todo-items">
          <TaskInputBox placeholder="Enter new Todo" listId={this.props.id} />
        </div>
      </div>
    );
  }
}

const ListContainer = connect(
  state => {
    return {
      lists: state.lists.listArray
    };
  },
  dispatch => {
    return {
      removeList: id => dispatch({ type: "REMOVE_LIST", id })
    };
  }
)(List);

export default ListContainer;
