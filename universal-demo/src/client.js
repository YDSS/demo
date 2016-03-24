import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {browserHistory} from 'react-router';
import {ReduxAsyncConnect} from 'redux-async-connect';

import createStore from './redux/store';
import reducer from './redux/reducer/reducer';
import route from './route';
import Html from './helper/Html.jsx';
import DevTool from './component/DevTool.jsx';

const $wrap = document.getElementById('content');
const store = createStore(reducer, window.__data);
const component = (
    <Router history={browserHistory}
        render={(props) => <ReduxAsyncConnect {...props}/>}>
        {route} 
    </Router>
);

ReactDOM.render(
    <Provider store={store} key='provider'>
        <div>
            {component} 
        </div>
    </Provider>,
    $wrap
);

if (__CLIENT__ && __DEVELOPMENT__ && __DEVTOOLS__) {
    ReactDOM.render(
        <Provider store={store} key='provider'>
            <div>
                {component}
                <DevTool/>
            </div>
        </Provider>,
        $wrap
    );
}
