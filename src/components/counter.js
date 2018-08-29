import React, { Component } from 'react';
import {connect} from 'react-redux';


class Counter extends Component {
  render() {
    let displayValue = 0;
    if (this.props.count[this.props.id] && this.props.count[this.props.id].count) {
        displayValue = this.props.count[this.props.id].count;
    }
    return (
      <div className='count-number'>
        <div >{displayValue}</div>
        <button className='remove-button' >X</button>
        <button onClick={() => this.props.decrement(this.props.id)}>-</button>
        <button onClick={() => this.props.increment(this.props.id)}>+</button>
      </div>
    
    );
  }
}


const CounterContainer = connect(state => {
    return {
        count: state.counters
    }
}, dispatch => {
  return {
    increment: (id) => dispatch({type: 'INCREMENT', id}),
    decrement: (id) => dispatch({type: 'DECREMENT', id})
  }
})(Counter);  
export default CounterContainer;
