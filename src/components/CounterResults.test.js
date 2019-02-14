import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { CounterResults } from './CounterResults';

let wrapper;
let props;

describe('CounterResults', () => {
    beforeEach(() => {
        props = { clickCount: 150 };
        wrapper = shallow(<CounterResults {...props} />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CounterResults {...props} />, div);
    });

    it('matches the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders only one CounterResults', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders a paragraph element', () => {
        expect(wrapper.find('p').length).toEqual(1);
    });

    it('shows the correct click count based on the props', () => {
        expect(wrapper.find('p').prop('children')).toContain(150);
    });
});
