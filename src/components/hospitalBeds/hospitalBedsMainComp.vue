<template>
    <!-- Главный Блок для взаимодействия с КОЙКАМИ -->
    <div class="hospital-beds-main">

        <!-- Список Коек -->
        <itemsListComp 
        :main-title="'койки'"
        :items="hospitalBeds"
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
import { ref, onMounted } from 'vue';
import { getAllHospitalBedsDB } from '../../api/hospitalBedsApi';
// TYPES
import { ArrayHospitalBedClient } from '../../types/hospitalBedType'; 

// Компонуемый файл хранит переиспользуемую логику для работы contentBlock
const { 
    currentItemName, 
    isShowContentBlock, 
    changeContentBlock 
} = contentBlockCompose();

const hospitalBeds = ref<ArrayHospitalBedClient>([]);

// Получение массива КОЕК с БД
onMounted(async () => {
    try {
        hospitalBeds.value = await getAllHospitalBedsDB();
    } catch (err) {
        throw new Error(`components/hospitalBeds/hospitalBedsMainComp: onMounted  => ${err}`);
    }
});

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