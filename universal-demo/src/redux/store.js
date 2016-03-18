import {createStore as _createStore} from 'redux';

export default function createStore(reducer, data) {
    if (data) {
        return _createStore(reducer, data);
    }

    return _createStore(reducer);
}

