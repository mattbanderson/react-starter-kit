import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

function select(state) {
  return {
    // state from reducers here
  };
}

export default connect(select)(App);
