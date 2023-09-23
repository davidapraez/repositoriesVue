<script setup>
import {useRoute,useRouter} from 'vue-router'
const router=useRouter();
const back=async()=>{
    router.push('/home')
    console.log(router.getRoutes)
}
</script>
<template>
  <h1>
    404
  </h1>
  <button @click="back">Volver</button>  
</template>