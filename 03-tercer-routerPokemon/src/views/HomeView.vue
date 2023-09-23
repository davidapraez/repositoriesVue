<script setup>
import {useCounterStore} from '../store/counter'
import TheWelcome from '../components/TheWelcome.vue'
import {storeToRefs} from 'pinia'

const {increment,}=useCounterStore();
const {count,double,triple}=storeToRefs(useCounterStore());

</script>

<template>
  <h1>Home Counter: {{count}}</h1>
  <h2>Double: {{double}}</h2>
  <h3>Triple: {{triple}}</h3>
  <button @click="increment">Increment</button>
</template>
