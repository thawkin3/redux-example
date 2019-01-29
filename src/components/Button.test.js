import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Button } from './Button';

let wrapper, props;

describe('Button', () => {
	beforeEach(() => {
		props = {
			buttonText: 'Click me!',
			clickHandler: () => { /* do nothing */ },
		};
		wrapper = shallow(<Button {...props} />);
	});

	it('renders a single button', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('renders a button element', () => {
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('matchs snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	})

	it('shows the correct button text', () => {
		expect(wrapper.find('button').prop('children')).toEqual('Click me!');
	});

	it('calls the click handler when clicked', () => {
		const spy = jest.spyOn(props, 'clickHandler');
		wrapper = shallow(<Button {...props} />);
		const mockEvent = {
			target: {
				value: 'Hey!'
			}
		};
		wrapper.find('button').simulate('click', mockEvent);
		expect(spy).toHaveBeenCalledTimes(1);
		spy.mockRestore();
	});

	it('renders without crashing', () => {
	    const div = document.createElement('div');
	    ReactDOM.render(<Button {...props} />, div);
	    ReactDOM.unmountComponentAtNode(div);
	});


});	