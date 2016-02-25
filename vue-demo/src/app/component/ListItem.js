import Vue from 'vue';
import * as todoAction from '../action/todo';
import store from '../store';

const ListItem = Vue.component('list-item', {
    template: require('raw!./listItem.tpl'),
    props: ['todo'],
    data() {
        return {
            editedTodo: null
        };
    },
    methods: {
        editTodo(todo) {
            this.beforeEditCache = todo.title;
            this.editedTodo = todo;
        },
        removeTodo(todo) {
            store.dispatch(todoAction.removeTodo(todo));
        }
    },
    // a custom directive to wait for the DOM to be updated
    // before focusing on the input field.
    // http://vuejs.org/guide/custom-directive.html
    directives: {
        'todo-focus': function (value) {
            if (!value) {
                return;
            }
            var el = this.el;
            Vue.nextTick(function () {
                el.focus();
            });
        }
    }
});

export default ListItem;
