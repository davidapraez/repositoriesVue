<script setup>
import { storeToRefs } from 'pinia'
import {useFavoriteStore} from '../store/favorito'
import { RouterLink, RouterView } from "vue-router";

const useFavoritos=useFavoriteStore()

const {favoritos}=storeToRefs(useFavoritos)
const {remove}=useFavoritos
</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length===0">Sin favoritos</p>
    <ul class="list-group">
        <li class="list-group-item "
            v-for="poke in favoritos"
            :key="poke.id"
        ><div>
            {{poke.name}}
        </div>
        <div @click="remove(poke.id)" class="btn btn-sm btn-danger">Eliminar</div>
        <router-link :to="`/pokemones/${poke.name}`"
        class="btn-sm btn btn-outline-primary m-2 "
        >Info</router-link>
    </li>
    </ul>
</template>