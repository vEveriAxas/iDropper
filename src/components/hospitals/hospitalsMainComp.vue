<template>
    <!-- Главный Блок для взаимодействия с Больницами -->
    <div class="hospitals-main">
        <div class="hospitals-main__wrapper">
            <hospitalsListComp :hospitals="hospitals"/>
        </div>        
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// COMPONENTS
import hospitalsListComp from './hospitalsListComp.vue';
// API
import { getAllHospitalDB } from '../../api/hospitalsApi';
// TYPES
import { HospitalClient } from '../../types/hospitalType'; 


// Полученный с БД массив данных
const hospitals = ref<Array<HospitalClient> | []>([]);

// Получение массива БОЛЬНИЦ с БД
onMounted(async () => {
    try {
        hospitals.value = await getAllHospitalDB();
        // hospitals.value = [];
    } catch (err) {
        throw new Error(`components/departments/departmentsMainComp: onMounted  => ${err}`);
    }
});

</script>

<style scoped>
.hospitals-main {
    width: 100%;
    height: 100%;
    padding: 0 1rem 0 4rem;
}
.hospitals-main__wrapper {
    width: 100%;
    height: 100%;
    background-color: var(--bg-color-white);
}
</style>