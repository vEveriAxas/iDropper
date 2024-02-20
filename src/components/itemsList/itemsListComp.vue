<template>
    <!-- Компонент для отрисовки Больницы, Отделений, Палат и Коек -->
    <div class="items-list__container">
        <div class="items-list__header">
            <h1 class="items-list__header--title">Доступные {{  }}</h1>
        </div>

        <!-- Отрисовка элементов -->
        <div class="items-list__wrapper">
            <itemComp class="wrapper-item" v-for="(item, index) in 100"  :key="index"></itemComp>
        </div>
    </div>
</template>

<script setup lang="ts">
import itemComp from './itemComp.vue';
</script>

<style scoped>
.items-list__container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 95%;
    background-color: var(--bg-color-white);
    border-radius: 20px;
    box-shadow: var(--shadow);
    overflow: hidden;
}
.items-list__header {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    width: 94%;
    height: max-content;
    background-color: var(--bg-color-white);
    color: var(--color-default);
    border-bottom: var(--border-thin);
    z-index: 20;
}
.items-list__header--title {
    font-family: var(--font);
    font-size: 1.4rem;
    font-weight: normal;
}
.items-list__wrapper {
    position: absolute;
    bottom: 0;
    width: 94%;
    height: 98%;
    max-height: 100%;
    overflow: auto;
    padding: 0rem 2rem 2rem 2rem;
    z-index: 10;
}
.wrapper-item {
    margin-top: 3.5rem;
} 
.wrapper-item + .wrapper-item {
    margin-top: 1rem;
}
</style>