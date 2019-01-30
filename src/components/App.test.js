import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { App } from './App';
import INITIAL_STATE from '../reducers/initialState';

let wrapper;

describe('App component', () => {
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('renders without crashing', () => {
	  const mockStore = configureStore([reduxThunk]);
	  const store = mockStore(INITIAL_STATE);
	  const div = document.createElement('div');
	  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it('renders one app', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('renders three Button components', () => {
		expect(wrapper.find('Connect(Button)').length).toEqual(3);
	});

	it('renders one CounterResults component', () => {
		expect(wrapper.find('Connect(CounterResults)').length).toEqual(1);
	});

	it('renders one element with an App-header class', () => {
		expect(wrapper.find('.App-header').length).toEqual(1);
	});

	it('matches the snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
