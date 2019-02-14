import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Form } from './Form';

let wrapper, props;

describe('Form', () => {
    beforeEach(() => {
        props = {
            ajaxRequestInProgress: false,
            fetchGitHubUser: () => {},
        };
        wrapper = shallow(<Form {...props} />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Form {...props} />, div);
    });

    it('matches the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders only one Form', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders a form with the class search-form', () => {
        expect(wrapper.find('form.search-form').length).toEqual(1);
    })

    it('renders a button, label, and input element', () => {
        expect(wrapper.find('button').length).toEqual(1);
        expect(wrapper.find('label').length).toEqual(1);
        expect(wrapper.find('input').length).toEqual(1);
    });

    it('renders a p element with the class searching when ajaxRequestInProgress is true', () => {
        expect(wrapper.find('p.searching').length).toEqual(0);
        wrapper.setProps({ ajaxRequestInProgress: true });
        expect(wrapper.find('p.searching').length).toEqual(1);
    });

    it('responds to the submit event on the form when there is a username provided', () => {
        const spy = jest.spyOn(Form.prototype, 'handleSubmit');
        const spy2 = jest.spyOn(props, 'fetchGitHubUser');
        wrapper = shallow(<Form {...props} />);
        wrapper.setState({ username: 'thawkin3' });
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy2).toHaveBeenCalledTimes(1);
        expect(wrapper.state().username).toEqual('');
        spy.mockRestore();
        spy2.mockRestore();
    });

    it('responds to the submit event on the form when there is not a username provided', () => {
        const spy = jest.spyOn(Form.prototype, 'handleSubmit');
        const spy2 = jest.spyOn(props, 'fetchGitHubUser');
        wrapper = shallow(<Form {...props} />);
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy2).toHaveBeenCalledTimes(0);
        spy.mockRestore();
        spy2.mockRestore();
    });

    it('responds to the change event on the input', () => {
        const spy = jest.spyOn(Form.prototype, 'handleChange');
        wrapper = shallow(<Form {...props} />);
        wrapper.find('input').simulate('change', { target: { value: 'thawkin3' } });
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
    });
});
