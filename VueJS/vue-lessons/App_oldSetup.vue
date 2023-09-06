<script>
import { ref } from 'vue'
export default {
    setup(){
        const name = ref('Peter')
        const age = ref(40)
        const birthday = () => age.value += 1

        return {
            name,
            age,
            birthday,
        }
    }
}
</script>
<template>
    <h1 class="name">{{ name }}</h1>
    <h3 class="age">{{ age }}</h3>
    <button @click="birthday">Happy Birthday</button>
</template>

<style>
.name{
    font-size: 40px;
    color: maroon;
}
.age{
    color: steelblue;
}
</style>