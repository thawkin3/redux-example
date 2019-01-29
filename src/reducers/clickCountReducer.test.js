import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../actions/types';
import INITIAL_STATE from './initialState';
import clickCountReducer from './clickCountReducer';

describe('clickCountReducer', () => {
    it('should return initial state when no matching action', () => {
        expect(clickCountReducer(undefined, {})).toEqual(INITIAL_STATE.clickCount);
    });

    it('should handler INCREMENT_COUNTER', () => {
        const expectedValue = 1;
        const action = {
            type: INCREMENT_COUNTER,
            payload: null,
        };

        expect(clickCountReducer(undefined, action)).toEqual(expectedValue);
    })
});