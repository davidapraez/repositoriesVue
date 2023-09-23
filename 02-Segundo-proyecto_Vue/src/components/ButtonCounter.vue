<script setup>
import {ref} from 'vue';
const contador=ref(0);
const increment=()=>{
    contador.value++;
}
</script>

<template>
    <button @click="increment">{{contador}}</button>
</template>