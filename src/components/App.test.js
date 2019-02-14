import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { App } from './App';
import INITIAL_STATE from '../reducers/initialState';

let wrapper;

describe('App', () => {
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders without crashing', () => {
        const middlewares = [reduxThunk];
        const mockStore = configureStore(middlewares);
        const store = mockStore(INITIAL_STATE);
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    });

    it('matches the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders only one app', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders three Button components', () => {
        expect(wrapper.find('Button').length).toEqual(3);
    });

    it('renders one CounterResults component', () => {
        expect(wrapper.find('Connect(CounterResults)').length).toEqual(1);
    });

    it('renders a div with an App-header class', () => {
        expect(wrapper.find('.App-header').length).toEqual(1);
    });

    it('renders a div with an App-footer class', () => {
        expect(wrapper.find('.App-footer').length).toEqual(1);
    });

    it('renders two divs with an exampleSection class', () => {
        expect(wrapper.find('.exampleSection').length).toEqual(2);
    });    
});
