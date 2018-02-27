import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { CounterResults } from './CounterResults';
import INITIAL_STATE from '../reducers/initialState';

let wrapper, props;

beforeEach(() => {
	props = {
		clickCount: 150,
	},
	wrapper = shallow(<CounterResults {...props} />);
});

// Shallow rendering the unconnected component
it('renders only one CounterResults', () => {
	expect(wrapper.length).toEqual(1);
});

// Finding content that the component should render
it('renders a paragraph element', () => {
	expect(wrapper.find('p').length).toEqual(1);
});

// Checking on prop the component received
it('shows the correct click count based on the props', () => {
	expect(wrapper.find('p').prop('children')).toContain(150);
});

// Snapshot testing
it('matches the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});

// Rendering a component into the DOM without setting up a mock store since it and it's children are not connected
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CounterResults {...props} />, div);
});
