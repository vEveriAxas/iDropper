<template>
    <!-- Главный Блок для взаимодействия с Больницами -->
    <div class="hospitals-main">

        <!-- Список Палат -->
        <itemsListComp 
        :main-title="'больницы'"
        :items="hospitals"
        @select-item="(id, itemName) => changeContentBlock(id, itemName)"/>
    
        <!-- Контент Блок -->
        <contentBlockComp
        class="hospital-beds-main__content-block"
        :content-title="currentItemName"
        :show="isShowContentBlock"/>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import contentBlockCompose from '../../composable/contentBlockCompose';
// COMPONENTS
import itemsListComp from '../itemsList/itemsListComp.vue';
import contentBlockComp from '../contentBlock/contentBlockComp.vue';
// API
import { getAllHospitalDB } from '../../api/hospitalsApi';
// TYPES
import { HospitalClient } from '../../types/hospitalType'; 

// Компонуемый файл хранит переиспользуемую логику для работы contentBlock
const { 
    currentItemName,
    isShowContentBlock, 
    changeContentBlock 
} = contentBlockCompose();

const hospitals = ref<Array<HospitalClient> | []>([]);

// Получение массива БОЛЬНИЦ с БД
onMounted(async () => {
    try {
        hospitals.value = await getAllHospitalDB();
    } catch (err) {
        throw new Error(`components/departments/departmentsMainComp: onMounted  => ${err}`);
    }
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