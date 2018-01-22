import { combineReducers } from 'redux';

import doTestReducer from './doTestReducer';

export default combineReducers({
    testResults: doTestReducer
});
