import {
    ADD_TODO,
    REMOVE_TODO
} from '../action/todo';

let initialState = {
    todos: [],
    visibility: 'all' 
};

initialState.todos.push({
    title: 'hi there!',
    isCompleted: false
});

export default function todos(state = initialState, action) {
    let payload = action.payload;

    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    payload
                ]
            });
            break;

        case REMOVE_TODO:
            state.todos.$remove(payload);

            return Object.assign({}, state);
            break;

        default:

    }
        return state;
}
