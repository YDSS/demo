import Vue from 'vue';
import configureStore from './store';

import 'todomvc-app-css/index.css';

const store = configureStore();
const initialState = store.getState();
console.log(initialState.visibility);

let vm = new Vue({
    el: '.todoapp',
    data: {
        unsubscribe: null,
        todos: initialState.todos,
        visibility: initialState.visibility
    },
    // 初始化时订阅store
    created() {
        this.unsubscribe = store.subscribe(() => {
            this.data = store.getState()
        });
    },
    destroyed() {
        this.unsubscribe && this.unsubscribe();
    }
});

console.log(vm.visibility);
