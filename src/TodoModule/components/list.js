import React from "react";
import { connect } from "react-redux";
import InputBox from "./inputBox";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <InputBox
          placeholder="Enter title for todo list"
          todoId={this.props.id}
        />
        <h1>{this.props.lists[this.props.id].title}</h1>
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
  () => ({})
)(List);

export default ListContainer;
