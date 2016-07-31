import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import counter from './reducer';
import watchMySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(counter, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchMySaga);
