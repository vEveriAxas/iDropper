<template>
    <!-- Главный Блок для взаимодействия с КОЙКАМИ -->
    <div class="hospital-beds-main">
        <itemsListComp/>
    </div>
</template>

<script setup lang="ts">
import itemsListComp from '../itemsList/itemsListComp.vue';
</script>

<style scoped>
.hospital-beds-main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>