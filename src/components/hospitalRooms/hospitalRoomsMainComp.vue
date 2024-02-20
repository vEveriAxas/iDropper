<template>
    <!-- Главный Блок для взаимодействия с ПАЛАТАМИ -->
    <div class="hospital-rooms-main">
        <itemsListComp :main-title="'палаты'"/>
    </div>
</template>

<script setup lang="ts">
import itemsListComp from '../itemsList/itemsListComp.vue';
</script>

<style scoped>
.hospital-rooms-main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>