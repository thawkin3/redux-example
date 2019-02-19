import axios from 'axios';
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER,
    ADD_CARD,
    FETCHING_USER_IN_PROGRESS,
} from './types';

// ok with a synchronous action creator that returns a plain action object
export const incrementCounter = () => {
    return { type: INCREMENT_COUNTER, payload: null };
}

// ok with a synchronous action creator that returns a function that can then dispatch an action
export const decrementCounter = () => dispatch => {
    dispatch({ type: DECREMENT_COUNTER, payload: null });
}

// not ok with multiple levels deep of dispatch functions
// export const resetCounter = () => dispatch => dispatch => {
//     console.log('reset');
//     dispatch({ type: RESET_COUNTER, payload: null });
// }
export const resetCounter = () => dispatch => {
    dispatch({ type: RESET_COUNTER, payload: null });
}

// provided arguments first, then returns a function with dispatch as an argument
export const fetchGitHubUser = (username) => dispatch => {
    console.log('fetch in progress');
    dispatch({ type: FETCHING_USER_IN_PROGRESS, payload: true });

    return axios.get(`https://api.github.com/users/${username}`)
        .then(response => {
            console.log('fetch complete');
            dispatch({ type: ADD_CARD, payload: response.data });
            dispatch({ type: FETCHING_USER_IN_PROGRESS, payload: false });
        })
        .catch(error => {
            console.log('fetch error');
            console.log(error);
            dispatch({ type: FETCHING_USER_IN_PROGRESS, payload: false });
        });
}
