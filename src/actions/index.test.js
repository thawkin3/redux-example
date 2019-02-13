import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import * as actions from './index';
import * as types from './types';
import INITIAL_STATE from '../reducers/initialState';

const middlewares = [reduxThunk];
const mockStore = configureStore(middlewares);
const store = mockStore(INITIAL_STATE);

describe('actions', () => {
    afterEach(() => {
        store.clearActions();
    });

    describe('incrementCounter', () => {
        it('should create an action to INCREMENT_COUNTER', () => {
            // Set up your expected action type and payload
            const actionPayload = null;
            const expectedAction = {
                type: types.INCREMENT_COUNTER,
                payload: actionPayload,
            };

            // Dispatch the action
            store.dispatch(actions.incrementCounter());

            // Test if your store dispatched the expected actions
            const actionsInStore = store.getActions();
            expect(actionsInStore).toEqual([expectedAction]);
        });
    });

    describe('decrementCounter', () => {
        it('should create an action to DECREMENT_COUNTER', () => {
            // Set up your expected action type and payload
            const actionPayload = null;
            const expectedAction = {
                type: types.DECREMENT_COUNTER,
                payload: actionPayload,
            };

            // Dispatch the action
            store.dispatch(actions.decrementCounter());

            // Test if your store dispatched the expected actions
            const actionsInStore = store.getActions();
            expect(actionsInStore).toEqual([expectedAction]);
        });
    });

    describe('resetCounter', () => {
        it('should create an action to RESET_COUNTER', () => {
            // Set up your expected action type and payload
            const actionPayload = null;
            const expectedAction = {
                type: types.RESET_COUNTER,
                payload: actionPayload,
            };

            // Dispatch the action
            store.dispatch(actions.resetCounter());

            // Test if your store dispatched the expected actions
            const actionsInStore = store.getActions();
            expect(actionsInStore).toEqual([expectedAction]);
        });
    });
});
