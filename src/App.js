import React, { Component } from 'react';
import Counter from './components/counter.js';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.counters.map( e => <Counter id={e.id} />)}
          <button onClick={this.props.addCounter}>Add Counter</button>
          <button onClick={this.props.removeCounter}>Remove Counter</button>
          
      </div>
    );
  }
}

const AppContainer = connect(state => {
        return {
                counters: state.counters
        }
}, dispatch => {
    return {
        addCounter: () => dispatch({ type: 'ADD_COUNTER' }),            
        removeCounter: () => dispatch({ type: 'REMOVE_COUNTER' }),            
    }
})(App);



export default AppContainer;
