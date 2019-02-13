import { combineReducers } from 'redux';

import clickCountReducer from './clickCountReducer';
import cardsReducer from './cardsReducer';

export default combineReducers({
    clickCount: clickCountReducer,
    cards: cardsReducer,
});
