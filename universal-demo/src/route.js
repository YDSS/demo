import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './container/App.jsx';
import Home from './container/Home.jsx';
import About from './container/About.jsx';

const route = (
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='about' component={About}/>
    </Route>
);

export default route;
