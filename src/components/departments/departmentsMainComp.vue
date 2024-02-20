<template>
    <!-- Главный Блок для взаимодействия с ОТДЕЛЕНИЯМИ -->
    <div class="departments-main">
        <itemsListComp :main-title="'отделения'"/>
    </div>
</template>

<script setup lang="ts">
import itemsListComp from '../itemsList/itemsListComp.vue';
</script>

<style scoped>
.departments-main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>