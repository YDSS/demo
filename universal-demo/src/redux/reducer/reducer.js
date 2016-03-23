import {combineReducers} from 'redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import counter from './counter';

export default combineReducers({
    reduxAsyncConnect,
    counter
});
