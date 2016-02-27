import {
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    COMPLETE_TODO
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
            // $remove: vue additional func for trigger view update
            state.todos.$remove(payload);

            return Object.assign({}, state);
            break;

        case EDIT_TODO:
            state.todos.$set(payload, payload);

            return Object.assign({}, state);

        case COMPLETE_TODO:
            state.todos.$set(payload, payload);

            return Object.assign({}, state);

        default:

    }
        return state;
}
