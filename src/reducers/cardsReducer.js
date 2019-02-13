import { ADD_CARD } from '../actions/types';
import INITIAL_STATE from './initialState';

export default function(state = INITIAL_STATE.cards, action) {
    switch (action.type) {
        case ADD_CARD:
            return [...state, action.payload];
        default:
            return state;
    }
}