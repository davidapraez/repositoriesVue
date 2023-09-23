<template>
    <div>
        <h1>Home </h1>
        <p>{{ userStore.userData?.email}}</p>
        <form @submit.prevent="handleSubmit">
            <input type="text" name="" id="" placeholder="Ingrese Url" v-model="url">
            <button type="submit">Agregar</button>
        </form>

        <p v-if="databaseStore.loadingDoc">Loading docs ...</p>
        <ul v-else>
            <li v-for="item of databaseStore.documents" :key="item.id">
                {{ item.id }}
                <br>
                {{ item.name }}
                <br>
                {{ item.short }}
                <br>
                <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script setup >
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebaseConfig';
import {useUserStore} from '../stores/user'
import {useDatabaseStore} from '../stores/database'
import { ref } from 'vue';

const url=ref('');
const userStore=useUserStore()
const databaseStore=useDatabaseStore();


databaseStore.getUrls();
// onAuthStateChanged(auth,(user)=>{
//     console.log(user)
// })

const handleSubmit=()=>{
    //validaciones de esa url
    databaseStore.addUrl(url.value);
}
</script>
