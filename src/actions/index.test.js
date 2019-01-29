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
	})

	describe('incrementCounter', () => {
		it('should create an action to INCREMENT_COUNTER', () => {
			const actionPayload = null;
			const expectedAction = {
				type: types.INCREMENT_COUNTER,
				payload: actionPayload,
			};

			store.dispatch(actions.incrementCounter());

			const actionsInStore = store.getActions();
			expect(actionsInStore).toEqual([expectedAction]);
		})
	});

	describe('decrementCounter', () => {
		it('', () => {

		});
	})

})