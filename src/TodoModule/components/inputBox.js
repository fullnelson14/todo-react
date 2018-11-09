import React from "react";
import { connect } from "react-redux";

class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    this.props.addListTitle(this.props.todoId, this.textInput.current.value);
  };

  enterEvent = e => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  };

  componentDidMount() {
    this.textInput.current.addEventListener("keyup", this.enterEvent);
    this.textInput.current.focus();
  }

  componentWillUnmount() {
    this.textInput.current.removeEventListener("keyup", this.enterEvent);
  }

  render() {
    return (
      <div className={`${this.props.classes} input-style`}>
        <input
          type="text"
          ref={this.textInput}
          placeholder={this.props.placeholder}
        />
        <button onClick={this.handleSubmit}>Enter</button>
      </div>
    );
  }
}

const InputBoxContainer = connect(
  state => {
    return {
      lists: state.lists.listArray
    };
  },
  dispatch => {
    return {
      addListTitle: (id, title) =>
        dispatch({ type: "ADD_LIST_TITLE", title, id })
    };
  }
)(InputBox);

export default InputBoxContainer;
