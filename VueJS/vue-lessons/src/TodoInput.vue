<template>
    <form @submit.prevent="submitData">
        <input v-model="task">
        <button>Submit</button>
    </form>
</template>
<script>
export default {
    data(){
        return {
            task: '',
        }
    },
    methods: {
        submitData(e){
            // e.preventDefault();
            
            // this.$emit('自訂事件名稱', 值1, 值2,...)
            this.$emit('abc', this.task)
            this.task = ''
        },
    },
}
</script>