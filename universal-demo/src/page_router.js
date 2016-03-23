import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import {Provider} from 'react-redux';
import {ReduxAsyncConnect, loadOnServer} from 'redux-async-connect';

import Html from './helper/Html.jsx';
import route from './route';
import createHistory from 'react-router/lib/createMemoryHistory';
import createStore from './redux/store';
import reducer from './redux/reducer/reducer';

const router = express.Router();

router.use((req, res) => {
    const history = createHistory(req.originalUrl);

    match({
        location: req.originalUrl,
        routes: route,
        history 
    }, (err, redirectLocation, renderProps) => {
        // 匹配出错
        if (err) {
            res.status(500);
            res.send('err: ' + err.message);
        }
        // 匹配成功
        else if (renderProps) {
            const store = createStore(reducer);

            loadOnServer(renderProps, store).then(() => {
                const component = (
                    <Provider store={store} key='provider'>
                        <div>
                            <ReduxAsyncConnect {...renderProps} />
                        </div>
                    </Provider>
                );

                const template = ReactDOM.renderToString(<Html component={component} store={store}/>);

                res.send('<!doctype html>\n' + template);
            });
        }
        // 404
        else {
            res.status(404);
            res.send('Not found');
        }
    });
});

export {router};
