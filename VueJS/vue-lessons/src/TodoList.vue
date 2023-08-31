<script>
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

export default {
    components: {
        TodoInput,
        TodoItem,
    },
    data(){
        return {
            tasks: [],
        }
    },
    methods: {
        addTask(item){
            this.tasks.push(item)
        },
        removeTask(index){
            this.tasks.splice(index, 1)
        },
    },
}
</script>
<template>
    <todo-input @abc="addTask"></todo-input>
    <ol>
        <todo-item v-for="(task,index) in tasks" :xyz="task" @click="removeTask(index)"></todo-item>
    </ol>
</template>