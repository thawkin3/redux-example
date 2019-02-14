import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GitHubProfileViewer from './GitHubProfileViewer';
import INITIAL_STATE from '../reducers/initialState';

let wrapper;

describe('GitHubProfileViewer', () => {
    beforeEach(() => {
        wrapper = shallow(<GitHubProfileViewer />);
    });

    it('renders without crashing', () => {
        const middlewares = [reduxThunk];
        const mockStore = configureStore(middlewares);
        const store = mockStore(INITIAL_STATE);
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}><GitHubProfileViewer /></Provider>, div);
    });

    it('matches the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders only one GitHubProfileViewer', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders an h3 element', () => {
        expect(wrapper.find('h3').length).toEqual(1);
    });

    it('renders a Form component', () => {
        expect(wrapper.find('Connect(Form)').length).toEqual(1);
    });

    it('renders a CardList component', () => {
        expect(wrapper.find('Connect(CardList)').length).toEqual(1);
    });
});
