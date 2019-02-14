import { combineReducers } from 'redux';

import clickCountReducer from './clickCountReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    clickCount: clickCountReducer,
    users: usersReducer,
});
