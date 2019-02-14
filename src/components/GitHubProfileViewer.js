import React from 'react';
import Form from './Form';
import CardList from './CardList';
import './GitHubProfileViewer.css';

const GitHubProfileViewer = () => (
    <div>
        <h3>Github Profile Viewer</h3>
        <Form />
        <CardList />
    </div>
);

GitHubProfileViewer.displayName = 'GitHubProfileViewer';

export default GitHubProfileViewer;
