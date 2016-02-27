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
        // 正在编辑一个todo
        editTodo(todo) {
            // 缓存编辑前的todo，以便放弃编辑时恢复
            this.beforeEditCache = todo.title;
            this.editedTodo = todo;
        },
        doneEdit(todo) {
            if (!this.editedTodo) {
                return;
            }
            this.editedTodo = null;

            todo.title = todo.title.trim();
            if (!todo.title) {
                this.removeTodo(todo);
            }
            else {
                store.dispatch(todoAction.editTodo(todo));
            }
        },
        cancelEdit(todo) {
            this.editedTodo = null;
            todo.title = this.beforeEditCache;
        },
        removeTodo(todo) {
            store.dispatch(todoAction.removeTodo(todo));
        },
        completeTodo(todo, ev) {
            // 反转状态
            todo.isCompleted = !todo.isCompleted;

            store.dispatch(todoAction.completeTodo(todo));
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
