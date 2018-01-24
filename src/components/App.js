import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Button from './Button';
import CounterResults from './CounterResults';
import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React+Redux Example</h1>
        </header>
        <div className="App-body">
          <Button clickHandler={this.props.incrementCounter} buttonText="Increment Counter" />
          <Button clickHandler={this.props.decrementCounter} buttonText="Decrement Counter" />
          <Button clickHandler={this.props.resetCounter} buttonText="Reset Counter" />
          <CounterResults />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
