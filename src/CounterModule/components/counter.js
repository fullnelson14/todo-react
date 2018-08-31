import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    let displayValue = this.props.count.find(e => e.id === this.props.id).count;
    return (
      <div className="count-number">
        <div className="flex-container">
          <button
            className="remove-button"
            onClick={() => this.props.removeCounter(this.props.id)}
          >
            X
          </button>
          <div className="row1">
            <div>{displayValue}</div>
          </div>
          <div className="row2">
            <button onClick={() => this.props.decrement(this.props.id)}>
              -
            </button>
            <button onClick={() => this.props.increment(this.props.id)}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const CounterContainer = connect(
  state => {
    return {
      count: state.counters.counterArray
    };
  },
  dispatch => {
    return {
      increment: id => dispatch({ type: "INCREMENT", id }),
      decrement: id => dispatch({ type: "DECREMENT", id }),
      removeCounter: id => dispatch({ type: "REMOVE_COUNTER", id })
    };
  }
)(Counter);
export default CounterContainer;
