export const ADD_TODO = 'ADD_TODO';

export function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        payload: newTodo
    };
}

export const REMOVE_TODO = 'REMOVE_TODO';

export function removeTodo(todo) {
    return {
        type: REMOVE_TODO,
        payload: todo
    };
}

export const EDIT_TODO = 'EDIT_TODO';

export function editTodo(todo) {
    return {
        type: EDIT_TODO,
        payload: todo
    };
}
