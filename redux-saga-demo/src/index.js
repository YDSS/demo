import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './app';
import counter from './reducer';
import watchMySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(counter, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchMySaga);

const $wrap = document.getElementById('wrapper');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    $wrap
);
