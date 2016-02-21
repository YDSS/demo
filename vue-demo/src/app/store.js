import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducer/index';
import createLogger from 'redux-logger';

const logger = createLogger();
let middleware = [logger];

const store = compose(
    applyMiddleware(...middleware)
)(createStore)(rootReducer);

export default store;
