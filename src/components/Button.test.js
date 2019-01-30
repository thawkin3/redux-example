import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Button } from './Button';
import INITIAL_STATE from '../reducers/initialState';

let wrapper;
let props;

describe('Button component', () => {
	beforeEach(() => {
		props = {
			buttonText: 'Click me',
			clickHandler: () => { /* do nothing */ },
		};
		wrapper = shallow(<Button {...props} />);
	});

	it('renders without crashing', () => {
	  const mockStore = configureStore([reduxThunk]);
	  const store = mockStore(INITIAL_STATE);
	  const div = document.createElement('div');
	  ReactDOM.render(<Provider store={store}><Button {...props} /></Provider>, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it('renders one wrapper', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('matches the snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('renders a button', () => {
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('calls the clickHandler method when the button is clicked', () => {
		const spy = jest.spyOn(props, 'clickHandler');
		wrapper = shallow(<Button {...props} />);
		wrapper.find('button').simulate('click', {});
		expect(spy).toHaveBeenCalledTimes(1);
		spy.mockRestore();
	});
});
