import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './container/App.jsx';
import Counter from './component/Counter.jsx';

const route = (
    <Route path='/' component={App}>
        <IndexRoute component={Counter}/>
    </Route>
);

export default route;
