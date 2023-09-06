<!-- https://github.com/vuejs/rfcs/pull/231 -->

<script setup>
import { ref } from 'vue'

const redColor = ref('maroon')

const name = ref('Peter')
const age = ref(40)
const changeColor = () => redColor.value = 'darkgreen'

</script>

<template>
    <h1 class="name">{{ name }}</h1>
    <h3 class="age">{{ age }}</h3>
    <button @click="changeColor">Change color</button>
</template>

<style scoped>
.name{
    font-size: 40px;
    /* color: maroon; */
    color: v-bind(redColor);
}
.age{
    color: steelblue;
}
</style>