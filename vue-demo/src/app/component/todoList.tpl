<ul class="todo-list">
    <template v-for="todo in filteredTodos">
        <list-item :todo='todo'></list-item>
    </template>
</ul>

