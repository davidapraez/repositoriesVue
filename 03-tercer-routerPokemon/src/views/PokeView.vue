<script setup>
import {useRoute,useRouter} from 'vue-router'
import {useGetData} from '@/composables/getDatos'
import {useFavoriteStore} from '../store/favorito'
import { storeToRefs } from 'pinia';



const route=useRoute();
const router=useRouter();
const {data,getData,loading}=useGetData();
const useFavoritos=useFavoriteStore();
const {add,findPoke}=useFavoritos;

const back=async()=>{
        router.push('/pokemones')
}
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>
<template>
    <p v-if="loading">Cargando informacion..</p>
    <div class="alert alert-danger" v-if="errorData">{{errorData}}</div>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="#" class="imgn">
        <h1>Poke name: {{$route.params.name}}</h1>
        <button :disabled="findPoke(data.name)" @click="add(data)" class="btn btn-primary mb-2">Agregar Favoritos</button>
    </div>
    <h1 v-else>No existe el Poke</h1>
    <button @click="back" class="btn btn-outline-primary ">Volver</button>
</template>

<style>
.imgn{
    display: block;
    margin: auto;
}
</style>