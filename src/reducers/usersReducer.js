import { ADD_CARD, FETCHING_USER_IN_PROGRESS } from '../actions/types';
import INITIAL_STATE from './initialState';

export default function(state = INITIAL_STATE.users, action) {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                cards: [...state.cards, action.payload],
            };
        case FETCHING_USER_IN_PROGRESS:
            return {
                ...state,
                ajaxRequestInProgress: action.payload,
            };
        default:
            return state;
    }
}
