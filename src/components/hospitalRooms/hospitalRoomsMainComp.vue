<template>
    <!-- Главный Блок для взаимодействия с ПАЛАТАМИ -->
    <div class="hospital-rooms-main">

        <!-- Список Палат -->
        <itemsListComp 
        :main-title="'палаты'"
        @select-item="changeContentBlock"/>

        <!-- Контент Блок -->
        <contentBlockComp
        class="hospital-beds-main__content-block"
        :show="isShowContentBlock"
        :content-title="currentItemName"/>
    </div>
</template>

<script setup lang="ts">
import itemsListComp from '../itemsList/itemsListComp.vue';
import contentBlockComp from '../contentBlock/contentBlockComp.vue';
import contentBlockCompose from '../../composable/contentBlockCompose';

// Компонуемый файл хранит переиспользуемую логику для работы contentBlock
const { 
    currentItemName, 
    isShowContentBlock, 
    changeContentBlock 
} = contentBlockCompose();
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