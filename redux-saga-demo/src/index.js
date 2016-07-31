import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './app';

const $wrap = document.getElementById('wrapper');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    $wrap
);
