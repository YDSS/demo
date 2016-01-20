import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducer';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
let store = createStoreWithMiddleware(rootReducer);

export default store;
