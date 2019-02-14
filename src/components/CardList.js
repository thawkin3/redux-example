import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Card from './Card';
import './CardList.css';

export const CardList = ({ cards }) => (
    <div className="cardListContainer">
        {cards.map(card => <Card key={card.id} {...card} />)}
    </div>
);

function mapStateToProps({ users }) {
    return { cards: users.cards };
}

CardList.displayName = 'CardList';

export default connect(mapStateToProps, actions)(CardList);
