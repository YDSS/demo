import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const counter = handleActions({
    ['counter/get'](state) {
        return { ...state };
    },
    ['counter/increment'](state) {
        return { ...state, count: ++state.count };
    },
    ['counter/decrement'](state) {
        return { ...state, count: --state.count };
    }
}, {
    count: 0
});

export default counter;
