import express from 'express';
import path from 'path';
import {match} from 'react-router';
import {Provider} from 'react-redux';

import route from './route';
import createHistory from 'react-router/lib/createMemoryHistory';

const app = express();

app.use(express.static(path.join(__dirname, './dist')));

app.use(function (req, res) {
    var history = createHistory(req.originalUrl);

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
            const App = renderProps.routes[0].component;
            const Counter = renderProps.routes[1].component;

            const component = (
                <Provider store={store} key='provider'>
                    <App>
                        <Counter/>
                    </App>
                </Provider>
            );
        }
        // 404
        else {
            res.status(404);
            res.send('Not found');
        }
    });
});

app.listen(8081);
console.log('server start on 8081');
