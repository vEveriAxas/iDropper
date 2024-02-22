<template>
    <!-- Главный Блок для взаимодействия с КОЙКАМИ -->
    <div class="hospital-beds-main">

        <!-- Список Коек -->
        <itemsListComp 
        :main-title="'койки'"
        :items="hospitalBeds"
        @select-item="false"/>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// COMPONENTS
import itemsListComp from '../itemsList/itemsListComp.vue';
// API
import { getAllHospitalBedsDB } from '../../api/hospitalBedsApi';
// TYPES
import { ArrayHospitalBedClient } from '../../types/hospitalBedType'; 


// Полученный с БД массив данных
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
}
</style>