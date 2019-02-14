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
        const { ajaxRequestInProgress } = this.props;
        const { username } = this.state;
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <label htmlFor="search" className="search-label">Search for a GitHub user</label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    value={username}
                    onChange={this.handleChange}
                    disabled={ajaxRequestInProgress}
                    placeholder="Github username"
                    required
                />
                <button type="submit">Add card</button>
                { ajaxRequestInProgress && <p className="searching">Searching...</p> }
            </form>
        );
    };
}

function mapStateToProps({ users }) {
    return { ajaxRequestInProgress: users.ajaxRequestInProgress };
}

export default connect(mapStateToProps, actions)(Form);
