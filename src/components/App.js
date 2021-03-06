import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Button from './Button';
import CounterResults from './CounterResults';
import GitHubProfileViewer from './GitHubProfileViewer';
import logo from '../assets/logo.svg';
import './App.css';

export const App = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">React+Redux Example</h1>
            </header>
            <div className="App-body">
                <p className="introText">This is a basic React+Redux example built using create-react-app. It can be used as a walking skeleton for your base React+Redux app which you can then build out. It contains all the basic boilerplate code for action creators, action types, reducers, and initial state.</p>
                <div className="exampleSection">
                    <h2>Synchronous Example</h2>
                    <Button clickHandler={props.incrementCounter} buttonText="Increment Counter" />
                    <Button clickHandler={props.decrementCounter} buttonText="Decrement Counter" />
                    <Button clickHandler={props.resetCounter} buttonText="Reset Counter" />
                    <CounterResults />
                </div>
                <div className="exampleSection">
                    <h2>Asynchronous Example</h2>
                    <GitHubProfileViewer />
                </div>
            </div>
            <div className="App-footer">
                <a href="https://github.com/thawkin3/redux-example" target="_blank" rel="noopener noreferrer">https://github.com/thawkin3/redux-example</a>
            </div>
        </div>
    );
}

export default connect(null, actions)(App);
