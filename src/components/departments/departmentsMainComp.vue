<template>
    <!-- Главный Блок для взаимодействия с ОТДЕЛЕНИЯМИ -->
    <div class="departments-main">

        <!-- Список Палат -->
        <itemsListComp 
        :main-title="'отделения'"
        :items="departments"
        @select-item="false"/>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// COMPONENTS
import itemsListComp from '../itemsList/itemsListComp.vue';
// API
import { getAllDepartmentsDB } from '../../api/departmentsApi';
// TYPES
import { ArrayDepartmentClient } from '../../types/departmentType'; 


// Полученный с БД массив данных
const departments = ref<ArrayDepartmentClient>([]);

// Получение массива ОТДЕЛЕНИЙ с БД
onMounted(async() => {
    try {
        departments.value = await getAllDepartmentsDB();
    } catch (err) {
        throw new Error(`components/departments/departmentsMainComp: onMounted  => ${err}`);
    }
});

</script>

<style scoped>
.departments-main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>