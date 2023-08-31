<template>
    <li class="item">{{xyz}}</li>
</template>
<script>
export default {
    props: ['xyz'],
}
</script>

<style>
.item{
    font: 18px Calibri;
    background-color: #abc;
    margin: 5px;
    padding: 5px;
}
.item:hover{
    background-color: #cba;
    cursor: pointer;
}
</style>