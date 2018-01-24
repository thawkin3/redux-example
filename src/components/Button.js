import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import './Button.css';

export class Button extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.clickHandler}>{this.props.buttonText}</button>
    );
  }
}

function mapStateToProps() {
    return {
        
    };
}

export default connect(mapStateToProps, actions)(Button);
