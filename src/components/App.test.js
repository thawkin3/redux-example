import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { App } from './App';
import INITIAL_STATE from '../reducers/initialState.js';


let wrapper;

describe('App', () => {
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('renders a single app', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('renders three Button components', () => {
		expect(wrapper.find('Connect(Button)').length).toEqual(3);
	});

	it('renders CounterResults', () => {
		expect(wrapper.find('Connect(CounterResults)').length).toEqual(1);
	});

	it('renders an app header', () => {
		expect(wrapper.find('.App-header').length).toEqual(1);
	});

	it('matchs snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('renders without crashing', () => {
	    const mockStore = configureStore();
	    const store = mockStore(INITIAL_STATE);
	    const div = document.createElement('div');
	    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
	    ReactDOM.unmountComponentAtNode(div);
	});


});	