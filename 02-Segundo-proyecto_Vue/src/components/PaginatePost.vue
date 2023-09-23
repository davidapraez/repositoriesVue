<script setup>
import { defineEmits, defineProps } from "vue";
defineProps (['inicio','fin','tamanio'])

const emit = defineEmits(['next', 'prev'])

/*const mostrarconsola=()=>{
  console.log("le diste a siguiente");
  emit('next')
}*/
</script>

<template>

  <div class="btn-group" role="group" aria-label="Basic example">
  
  <button @click="emit('prev')" 
  type="button" 
  class="btn btn-outline-primary"
  :disabled="inicio === 0"
  >
  Previous {{inicio}}
</button>
  <button 
  @click="emit('next')" 
  type="button" 
  class="btn btn-outline-primary"
  :disabled="fin >= tamanio"
  >
  Next {{fin}}
</button>
</div>

</template>