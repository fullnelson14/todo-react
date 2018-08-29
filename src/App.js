import React, { Component } from "react";
import Counter from "./components/counter.js";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-row">
          <h4>Counters</h4>
          <button onClick={this.props.addCounter}>Add Counter</button>
        </div>

        {this.props.counters.map(e => (
          <Counter id={e.id} />
        ))}
      </div>
    );
  }
}

const AppContainer = connect(
  state => {
    return {
      counters: state.counters
    };
  },
  dispatch => {
    return {
      addCounter: () => dispatch({ type: "ADD_COUNTER" })
    };
  }
)(App);

export default AppContainer;
