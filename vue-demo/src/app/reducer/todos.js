let initialState = {
    todos: [],
    visibility: 'all' 
};

initialState.todos.push({
    title: 'hi there!',
    isCompleted: false
});

export default function todos(state = initialState, action) {
    return state;
}
