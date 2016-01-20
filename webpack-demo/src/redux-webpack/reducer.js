import { combineReducers } from 'redux';

function count(state = {number: 0}, action) {
    return Object.assign({}, state, {
        number: ++state.number
    });
}

const rootReducer = combineReducers({
    count
});

export default rootReducer;
