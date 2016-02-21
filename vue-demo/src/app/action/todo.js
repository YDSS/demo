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
