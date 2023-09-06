<!-- https://github.com/vuejs/rfcs/pull/227 -->

<script setup>
import { ref } from 'vue'

const name = ref('Peter')
const age = ref(40)
const birthday = () => age.value += 1

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