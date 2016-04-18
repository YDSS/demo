import {combineReducers} from 'redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import counter from './counter';
import text from './text';

export default combineReducers({
    reduxAsyncConnect,
    counter,
    text
});
