import React from 'react';
import './Card.css';

const Card = (props) => (
    <div style={{ margin: '1em' }}>
        <img width='75' src={props.avatar_url} alt="" />
        <div style={{ display: 'inline-block', marginLeft: 10 }}>
            <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
                <a href={props.html_url} target="_blank">{props.name}</a>
            </div>
            <div>{props.company}</div>
        </div>
    </div>
);

export default Card;
