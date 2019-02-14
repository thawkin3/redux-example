import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Card from './Card';

let wrapper;
let props;

describe('Card', () => {
    beforeEach(() => {
        props = {
            avatar_url: 'url/here/img.jpg',
            html_url: 'https://github.com/thawkin3',
            name: 'Tyler Hawkins',
            company: '@instructure',
        };
        wrapper = shallow(<Card {...props} />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card {...props} />, div);
    });

    it('matches the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders only one Card', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders elements with classes for card, card-img, card-info, card-link, and card-company', () => {
        expect(wrapper.find('.card').length).toEqual(1);
        expect(wrapper.find('.card-img').length).toEqual(1);
        expect(wrapper.find('.card-info').length).toEqual(1);
        expect(wrapper.find('.card-link').length).toEqual(1);
        expect(wrapper.find('.card-company').length).toEqual(1);
    });
});
