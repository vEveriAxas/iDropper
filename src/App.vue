<template>
    <v-app>
        <navbarComp :is-show-user-actions="isShowUserActions" />  <!-- Шапка -->
        <router-view /> <!-- Контент -->
    </v-app>
</template>

<script setup lang="ts">
import navbarComp from './components/navbar/navbarComp.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute();

const isShowUserActions = ref<boolean>(false);

onMounted(() => {
    setTimeout(() =>{
        const routePath: Array<string> = route.fullPath.split('/');
        if(routePath[1] === 'main') {
            isShowUserActions.value = true;
        }
    });
});

</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    /* Basic style */
    --shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.3);

    /* Bacground color */
    --bg-color-white: #FFFFFF;
    --bg-color-default: #359ABA;
    --bg-color-op-blue: rgba(12, 151, 194, 0.17);
    
    /* Hover color */
    --hover-default: #D9D9D9;

    /* Color text */
    --color-default: #359ABA;
    
    /* Font */
    --font: "Rubik", sans-serif !important;
}

#app {
    font-family: var(--font);
    width: 100%;
    height: 100vh;
}

</style>
