import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { App } from './App';
import INITIAL_STATE from '../reducers/initialState';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<App />);
});

// Shallow rendering the unconnected component
it('renders only one app', () => {
	expect(wrapper.length).toEqual(1);
});

// Finding content that the component should render
it('renders three Button components', () => {
	expect(wrapper.find('Connect(Button)').length).toEqual(3);
});

// Finding content that the component should render
it('renders one CounterResults component', () => {
	expect(wrapper.find('Connect(CounterResults)').length).toEqual(1);
});

// Finding content that the component should render
it('renders a div with an App-header class', () => {
	expect(wrapper.find('.App-header').length).toEqual(1);
});

// Finding content that the component should render
it('renders a div with an App-footer class', () => {
	expect(wrapper.find('.App-footer').length).toEqual(1);
});

// Snapshot testing
it('matches the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});

// Testing a connected component using a mock store
it('renders without crashing', () => {
	const mockStore = configureStore();
    const store = mockStore(INITIAL_STATE);
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
