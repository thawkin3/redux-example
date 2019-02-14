import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Button from './Button';

let wrapper;
let props;

describe('Button', () => {
    beforeEach(() => {
        props = {
            buttonText: 'hey look at me',
            clickHandler: () => { /* do nothing */ },
        };
        wrapper = shallow(<Button {...props} />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button {...props} />, div);
    });

    it('matches the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders only one Button', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders a button element', () => {
        expect(wrapper.find('button').length).toEqual(1);
    });

    it('shows the correct button text based on the props', () => {
        expect(wrapper.find('button').prop('children')).toEqual('hey look at me');
    });

    it('responds to the click event', () => {
        const spy = jest.spyOn(props, 'clickHandler');
        wrapper = shallow(<Button {...props} />);
        wrapper.find('button').simulate('click', {});
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
    });
});
