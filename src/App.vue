<template>
    <v-app>
        <navbarComp />  <!-- Шапка -->
        <router-view /> <!-- Контент -->
    </v-app>
</template>

<script setup lang="ts">
import navbarComp from './components/navbar/navbarComp.vue';

</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    /* Bacground color */
    --bg-color-white: #FFFFFF;
    --bg-color-default: #359ABA;
    
    /* Hover color */
    --hover-default: #D9D9D9;
    /* Color text */

}

#app {
    font-family: "Rubik", sans-serif !important;
    width: 100%;
    height: 100vh;
}

</style>
