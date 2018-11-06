import React from "react";
import { connect } from "react-redux";

class TaskInputBox extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    //this.props.addListTitle(this.props.todoId, this.textInput.current.value);
    //I need to change this to addTaskText
    this.props.addTaskText(this.props.listId, this.textInput.current.value);
    this.textInput.current.value = "";
  };

  enterEvent = e => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  };

  componentDidMount() {
    this.textInput.current.addEventListener("keyup", this.enterEvent);
  }

  componentWillUnmount() {
    this.textInput.current.removeEventListener("keyup", this.enterEvent);
  }

  render() {
    return (
      <div>
        <div className={`${this.props.classes} input-style`}>
          <input
            type="text"
            ref={this.textInput}
            placeholder={this.props.placeholder}
          />
          <button onClick={this.handleSubmit}>Add</button>
        </div>
        <div className="task-list">
          <ul>
            {this.props.lists
              .find(e => {
                return e.id === this.props.listId;
              })
              .tasks.map(task => (
                <li key={task.taskId}>{task.taskText}</li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

const TaskInputBoxContainer = connect(
  state => {
    return {
      lists: state.lists.listArray
    };
  },
  dispatch => {
    return {
      addTaskText: (id, text) => dispatch({ type: "ADD_TASK_TEXT", text, id })
    };
  }
)(TaskInputBox);

export default TaskInputBoxContainer;
