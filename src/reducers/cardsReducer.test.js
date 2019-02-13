import { ADD_CARD } from '../actions/types';
import INITIAL_STATE from './initialState';
import cardsReducer from './cardsReducer';

describe('cardsReducer', () => {
    it('should return the initial state', () => {
        expect(cardsReducer(undefined, {})).toEqual(INITIAL_STATE.clickCount);
    });

    it('should handle ADD_CARD', () => {
        const expectedValue = [{ name: 'Tyler', url: 'thawkin3' }];

        expect(cardsReducer(undefined, {
            type: ADD_CARD,
            payload: { name: 'Tyler', url: 'thawkin3' },
        })).toEqual(expectedValue);
    });
});
