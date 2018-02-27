// import axios from 'axios';
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER
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