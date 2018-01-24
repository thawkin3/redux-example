import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import './CounterResults.css';

export class CounterResults extends Component {
  render() {
    return (
      <p>Counter value: {this.props.clickCount}</p>
    );
  }
}

function mapStateToProps({clickCount}) {
    return {
        clickCount
    };
}

export default connect(mapStateToProps, actions)(CounterResults);
