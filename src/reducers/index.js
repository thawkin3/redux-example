import { combineReducers } from 'redux';

import clickCountReducer from './clickCountReducer';

export default combineReducers({
    clickCount: clickCountReducer
});
