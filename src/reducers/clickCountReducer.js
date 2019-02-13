import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../actions/types';
import INITIAL_STATE from './initialState';

export default function(state = INITIAL_STATE.clickCount, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        case RESET_COUNTER:
            return INITIAL_STATE.clickCount;
        default:
            return state;
    }
}