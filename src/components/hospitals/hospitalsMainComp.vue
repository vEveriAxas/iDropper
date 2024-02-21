<template>
    <!-- Главный Блок для взаимодействия с Больницами -->
    <div class="hospitals-main">

        <!-- Список Палат -->
        <itemsListComp 
        :main-title="'больницы'"
        @select-item="changeContentBlock"/>
    
        <!-- Контент Блок -->
        <contentBlockComp
        class="hospital-beds-main__content-block"
        :show="isShowContentBlock"/>
    </div>
</template>

<script setup lang="ts">
import itemsListComp from '../itemsList/itemsListComp.vue';
import contentBlockComp from '../contentBlock/contentBlockComp.vue';
import { onMounted } from 'vue';
import contentBlockCompose from '../../composable/contentBlockCompose';
import { getAllHospitalDB } from '../../api/hospitalApi';

// Компонуемый файл хранит переиспользуемую логику для работы contentBlock
const { isShowContentBlock, changeContentBlock } = contentBlockCompose();

onMounted(async () => {
    console.log(await getAllHospitalDB());
});
</script>

<style scoped>
.hospitals-main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>