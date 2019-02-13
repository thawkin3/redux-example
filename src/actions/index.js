import axios from 'axios';
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER,
    ADD_CARD,
    FETCHING_USER_IN_PROGRESS,
} from './types';

export const incrementCounter = () => dispatch => {
    dispatch({ type: INCREMENT_COUNTER, payload: null });
}

export const decrementCounter = () => dispatch => {
    dispatch({ type: DECREMENT_COUNTER, payload: null });
}

export const resetCounter = () => dispatch => {
    dispatch({ type: RESET_COUNTER, payload: null });
}

export const fetchGitHubUser = (username) => dispatch => {
    dispatch({ type: FETCHING_USER_IN_PROGRESS, payload: true });
    
    return axios.get(`https://api.github.com/users/${username}`)
        .then(response => {
            dispatch({ type: ADD_CARD, payload: response.data });
            dispatch({ type: FETCHING_USER_IN_PROGRESS, payload: false });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FETCHING_USER_IN_PROGRESS, payload: false });
        });
}