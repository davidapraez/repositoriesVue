<script setup>
import { RouterLink, RouterView } from "vue-router";

const getDatos = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const variable = await res.json();
  } catch (error) {
    console.log(error);
  }
};
getDatos();
</script>

<template>
  <nav class="navbar bg-dark navbar-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        PokeApi
      </router-link>
      <div>
        <router-link class="btn btn-outline-primary me-2" to="/">Home</router-link>
        <router-link class="btn btn-outline-primary me-2" to="/pokemones"
          >Pokemones</router-link
        >
        <router-link class="btn btn-outline-primary me-2 " to="/favoritos"
          >Favoritos</router-link>
      </div>
    </div>
  </nav>
  <header>
    <div class="wrapper"></div>
  </header>
  <div class="container text-center">
    <RouterView />
  </div>
</template>
