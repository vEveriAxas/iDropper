<template>
    <v-app>
        <navbarComp :is-show-user-actions="isShowUserActions" /> <!-- Шапка -->
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
    setTimeout(() => {
        const routePath: Array<string> = route.fullPath.split('/');
        if (routePath[1] === 'main') {
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
    --shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
    --border-thin: 1px solid var(--bg-color-default);
    --border: 2px solid var(--bg-color-default);

    /* Background color */
    --bg-color-white: #FFFFFF;
    /* --bg-color-default: #359ABA; */
    --bg-color-default: #0ea5e9;
    --bg-color-op-blue: rgba(12, 151, 194, 0.17);
    --bg-color-gray: #D9D9D9;
    --bg-color-scrollbar: #359bbab7;

    /* Hover color */
    --hover-default: #D9D9D9;

    /* Color text */
    --color-default: #359ABA;
    /* --color-default: #415174; */
    --color-drawer: #236690;
    --color-gray: rgb(95, 95, 95);
    --color-white: #FFFFFF;

    /* Font */
    --font: "Rubik", sans-serif !important;
}

#app {
    font-family: var(--font);
    width: 100%;
    height: 100vh;
    font-family: var(--font);
    overflow: hidden;
}

/* По умолчанию скроллбар в приложении отключен */
::-webkit-scrollbar {
    width: 6px;
    /* ширина скроллбара */
}

::-webkit-scrollbar-thumb {
    background-color: var(--bg-color-scrollbar);
    border-radius: 20px;
    /* цвет полосы прокрутки */
}

::-webkit-scrollbar-track {
    background-color: var(--bg-color-op-blue);
    /* цвет фона */
}</style>
