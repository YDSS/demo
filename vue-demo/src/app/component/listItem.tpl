<li class="todo"
    :class="{completed: todo.completed, editing: todo == editedTodo}">
    <div class="view">
        <input class="toggle" type="checkbox" v-model="todo.completed">
        <label @dblclick="editTodo(todo)">{{todo.title}}</label>
        <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input 
        class="edit" 
        type="text"
        v-model="todo.title"
        v-todo-focus="todo == editedTodo"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit(todo)"
    >
</li>
