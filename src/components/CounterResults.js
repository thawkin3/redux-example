import React from 'react';
import { connect } from 'react-redux';
import './CounterResults.css';

export const CounterResults = ({ clickCount }) => (
    <p>Counter value: {clickCount}</p>
);

function mapStateToProps({ clickCount }) {
    return { clickCount };
}

CounterResults.displayName = 'CounterResults';

export default connect(mapStateToProps, null)(CounterResults);
