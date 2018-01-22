import { DO_TEST } from '../actions/types';
import INITIAL_STATE from './initialState';

export default function(state = INITIAL_STATE.testResults, actions) {
    switch (actions.type) {
        case DO_TEST:
            return actions.payload;
        default:
            return state;
    }
}