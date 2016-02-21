import Vue from 'vue';
import ListItem from './ListItem';

const TodoList = Vue.component('TodoList', {
    template: require('raw!./todoList.tpl'),
    props: ['filtered-todos'],
    components: {
        ListItem
    }
});

export default TodoList;
