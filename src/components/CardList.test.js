import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { CardList } from './CardList';

let wrapper, props;

describe('CardList', () => {
    beforeEach(() => {
        props = {
            cards: [
                {
                    avatar_url: 'url/here/img.jpg',
                    html_url: 'https://github.com/thawkin3',
                    name: 'Tyler Hawkins',
                    company: '@instructure',
                    id: 1,
                },
                {
                    avatar_url: 'url/here/img3.jpg',
                    html_url: 'https://github.com/testPerson',
                    name: 'Test Person',
                    company: '@fakecompany',
                    id: 2,
                },
            ]
        };
        wrapper = shallow(<CardList {...props} />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CardList {...props} />, div);
    });

    it('matches the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders only one CardList', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders an element with the class cardListContainer', () => {
        expect(wrapper.find('.cardListContainer').length).toEqual(1);
    });

    it('renders a Card component for every element in the cards array', () => {
        expect(wrapper.find('Card').length).toEqual(2);
    });
});
