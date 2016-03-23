import {createStore as _createStore, applyMiddleware, compose} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import DevTool from '../component/DevTool.jsx';

const middlewares = applyMiddleware(apiMiddleware);

export default function createStore(reducer, data) {
    if (data) {
        return compose(
            middlewares,
            DevTool.instrument()
        )(_createStore)(reducer, data);
    }

    return compose(middlewares)(_createStore)(reducer);
}

