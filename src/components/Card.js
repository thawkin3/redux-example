import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card">
        <img className="card-img" src={props.avatar_url} alt="" />
        <div className="card-info">
            <div className="card-link">
                <a href={props.html_url} target="_blank">{props.name}</a>
            </div>
            <div className="card-company">{props.company}</div>
        </div>
    </div>
);

Card.displayName = 'Card';

export default Card;
