<template>
    <div class="filter-panel__container">
        <!-- input-поиск -->
        <searchBlockComp v-model:value="searchValue"/>
    
        <!-- Блок для фильтрации -->
        <div class="filter-panel__sorted-block">

            <!-- Выбор Больницы -->
            <filterInputComp 
            v-model="checkedHospital"
            @load-items="loadItemsHospital"
            :item-list="availableHospitals" 
            :label-compbox="'Больница'" />

            <!-- Выбор Отделения -->
            <filterInputComp 
            v-model="checkedDepartments" 
            :item-list="checkedDepartments" 
            :label-compbox="'Отделение'" />

            <!-- Выбор Палаты -->
            <filterInputComp 
            v-model="checkedHospitalRoom" 
            :item-list="checkedHospitalRoom" 
            :label-compbox="'Палата'" />

            <!-- Выбор Койки -->
            <filterInputComp 
            v-model="checkedBed" 
            :item-list="checkedBed" 
            :label-compbox="'Койка'" />
        </div>
    </div>
</template>

<script setup lang="ts">
import searchBlockComp from './searchBlockComp.vue';
import filterInputComp from './filterInputComp.vue';
import useLoadingFilterData from '../../composable/loadingFilterData';
import { ref } from 'vue';


// =================  V-MODEL  ===================

// =================  PROPS  ===================

// =================  EMITS  ===================

// =================  DATA  ===================
const searchValue = ref('');

// Выбранные элементы в селект-списках (v-model данные для селектов)
const checkedHospital = ref([]);
const checkedDepartments = ref([]);
const checkedHospitalRoom = ref([]);
const checkedBed = ref([]);

// =================  METHODS  ===================

const { availableHospitals, loadItemsHospital } = useLoadingFilterData();


// =================  COMPUTED  ===================

// =================  WATCH  ===================

// =================  LIFECYCLE HOOKS  ===================


</script>

<style scoped>
.filter-panel__container {
    display: flex;
    align-items: center; 
    width: 100%;
    height: 10%;
    background-color: var(--bg-color-op-blue);
    padding: 1rem 6rem;
    border-bottom: var(--border-thin-light);
    overflow: hidden;
}
.filter-panel__sorted-block {
    display: flex;
    align-items: center;
    width: 70%;
    padding: 5px;
}
</style>