import { ADD_CARD, FETCHING_USER_IN_PROGRESS } from '../actions/types';
import INITIAL_STATE from './initialState';
import usersReducer from './usersReducer';

describe('usersReducer', () => {
    it('should return the initial state', () => {
        expect(usersReducer(undefined, {})).toEqual(INITIAL_STATE.users);
    });

    it('should handle ADD_CARD', () => {
        const expectedValue = {
            ...INITIAL_STATE.users,
            cards: [...INITIAL_STATE.users.cards, { name: 'Tyler', url: 'thawkin3' }],
        };

        expect(usersReducer(undefined, {
            type: ADD_CARD,
            payload: { name: 'Tyler', url: 'thawkin3' },
        })).toEqual(expectedValue);
    });

    it('should handle FETCHING_USER_IN_PROGRESS to set value to true', () => {
        const expectedValue = {
            ...INITIAL_STATE.users,
            ajaxRequestInProgress: true,
        };

        expect(usersReducer(undefined, {
            type: FETCHING_USER_IN_PROGRESS,
            payload: true,
        })).toEqual(expectedValue);
    });

    it('should handle FETCHING_USER_IN_PROGRESS to set value to false', () => {
        const expectedValue = {
            ...INITIAL_STATE.users,
            ajaxRequestInProgress: false,
        };

        expect(usersReducer(undefined, {
            type: FETCHING_USER_IN_PROGRESS,
            payload: false,
        })).toEqual(expectedValue);
    });
});
