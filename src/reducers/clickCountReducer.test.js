import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../actions/types';
import INITIAL_STATE from './initialState';
import clickCountReducer from './clickCountReducer';

describe('clickCountReducer', () => {
	it('should return the initial state for unrecognized actions', () => {
		expect(clickCountReducer(undefined, {})).toEqual(INITIAL_STATE.clickCount);
	});

	it('should handle INCREMENT_COUNTER', () => {
		const expectedValue = 1;
		const givenAction = {
			type: INCREMENT_COUNTER,
			payload: null,
		};

		expect(clickCountReducer(undefined, givenAction)).toEqual(expectedValue);
	});

	it('should handle DECREMENT_COUNTER', () => {
		const expectedValue = 4;
		const givenAction = {
			type: DECREMENT_COUNTER,
			payload: null,
		};

		expect(clickCountReducer(5, givenAction)).toEqual(expectedValue);
	});
});