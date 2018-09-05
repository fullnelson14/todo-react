import React from "react";
import { connect } from "react-redux";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };

    this.textInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.addListTitle(this.props.todoId, this.state.input);
    this.setState({
      input: ""
    });
  };

  componentDidMount() {
    this.textInput.current.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        this.handleSubmit();
      }
    });
    this.textInput.current.focus();
  }

  componentWillUnmount() {
    //this.textInput.current.removeEventListener();  why does the app crash if this is enabled???
  }

  render() {
    return (
      <div className={`${this.props.classes} input-style`}>
        <input
          type="text"
          ref={this.textInput}
          value={this.state.input}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />
        <button onClick={this.handleSubmit}>Submit</button>
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
