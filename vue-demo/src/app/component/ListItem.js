import Vue from 'vue';
import * as todoAction from '../action/todo';
import store from '../store';

const ListItem = Vue.component('list-item', {
    template: require('raw!./listItem.tpl'),
    props: ['todo'],
    methods: {
        removeTodo(todo) {
            store.dispatch(todoAction.removeTodo(todo));
        }
    }
});

export default ListItem;
