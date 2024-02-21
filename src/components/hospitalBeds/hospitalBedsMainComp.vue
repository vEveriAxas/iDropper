<template>
    <!-- Главный Блок для взаимодействия с КОЙКАМИ -->
    <div class="hospital-beds-main">

        <!-- Список Коек -->
        <itemsListComp 
        :main-title="'койки'" 
        @select-item="changeContentBlock"/>

        <!-- Контент Блок -->
        <contentBlockComp 
        class="hospital-beds-main__content-block" 
        :show="isShowContentBlock" />
    </div>
</template>

<script setup lang="ts">
import itemsListComp from '../itemsList/itemsListComp.vue';
import contentBlockComp from '../contentBlock/contentBlockComp.vue';
import contentBlockCompose from '../../composable/contentBlockCompose';

// Компонуемый файл хранит переиспользуемую логику для работы contentBlock
const { isShowContentBlock, changeContentBlock } = contentBlockCompose();
</script>

<style scoped>
.hospital-beds-main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
}
</style>