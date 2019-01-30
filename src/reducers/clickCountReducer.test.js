import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../actions/types';
import INITIAL_STATE from './initialState';
import clickCountReducer from './clickCountReducer';

describe('clickCountReducer', () => {
    it('should return the initial state', () => {
        expect(clickCountReducer(undefined, {})).toEqual(INITIAL_STATE.clickCount);
    });

    it('should handle INCREMENT_COUNTER', () => {
        const expectedValue = 1;

        expect(clickCountReducer(undefined, {
            type: INCREMENT_COUNTER,
            payload: null,
        })).toEqual(expectedValue);
    });

    it('should handle DECREMENT_COUNTER', () => {
        const expectedValue = -1;

        expect(clickCountReducer(undefined, {
            type: DECREMENT_COUNTER,
            payload: null,
        })).toEqual(expectedValue);
    });

    it('should handle RESET_COUNTER', () => {
        const expectedValue = 0;

        expect(clickCountReducer(50, {
            type: RESET_COUNTER,
            payload: null,
        })).toEqual(expectedValue);
    });
});
