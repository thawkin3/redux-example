import axios from 'axios';
import {
    DO_TEST
} from './types';

export const doTest = () => dispatch => {
    dispatch({ type: DO_TEST, payload: 'test action' });
}