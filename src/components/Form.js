import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import './Form.css';

export class Form extends Component {
    constructor(props) {
        super(props);

        this.state = { username: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ username: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username } = this.state;
        if (username) {
            this.props.fetchGitHubUser(username);
            this.setState({ username: '' });
        }
    };

    render() {
        const { username } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={this.handleChange}
                    placeholder="Github username"
                    required
                />
                <button type="submit">Add card</button>
            </form>
        );
    };
}

export default connect(null, actions)(Form);
