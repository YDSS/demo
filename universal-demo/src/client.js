import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {browserHistory} from 'react-router';

import createStore from './redux/store';
import reducer from './redux/reducer/reducer';
import route from './route';
import Html from './helper/Html.jsx';

const $wrap = document.getElementById('content');
const store = createStore(reducer, window.__data);
const component = (
    <Router history={browserHistory}>
        {route} 
    </Router>
);

ReactDOM.render(
    <Provider store={store} key='provider'>
        {component} 
    </Provider>,
    $wrap
);
