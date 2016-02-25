import Vue from 'vue';
import store from './store';
import TodoList from './component/TodoList';
import * as todoAction from './action/todo';

import 'todomvc-app-css/index.css';

// todos reducer
const initialState = store.getState().todos;
// debug mode
Vue.config.debug = true;

let vm = window.vm = new Vue({
    el: '.todoapp',
    data: {
        // 取消订阅store的方法，在vm destroyed时使用
        unsubscribe: null,
        todos: initialState.todos,
        visibility: initialState.visibility,
        // 输入框的值
        newTodo: '',
        // 正在编辑的todo
        editedTodo: null
    },
    components: {
        TodoList
    },
    methods: {
        addTodo() {
            var value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }

            store.dispatch(todoAction.addTodo({ title: value, completed: false }));
            this.newTodo = '';
        },
        removeTodo: todoAction.removeTodo
    },
    // 初始化时订阅store
    created() {
        this.unsubscribe = store.subscribe(() => {
            let state = store.getState().todos;

            this.todos = state.todos;
            this.visibility = state.visibility;
        });
    },
    destroyed() {
        this.unsubscribe && this.unsubscribe();
    }
});
