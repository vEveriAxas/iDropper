<template>
    <!-- Главный Блок для взаимодействия с ОТДЕЛЕНИЯМИ -->
    <div class="departments-main">

        <!-- Список Палат -->
        <itemsListComp 
        :main-title="'отделения'"
        :items="departments"
        @select-item="(id, itemName) => changeContentBlock(id, itemName)"/>

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
import { getAllDepartmentsDB } from '../../api/departmentsApi';
// TYPES
import { ArrayDepartmentClient } from '../../types/departmentType'; 

// Компонуемый файл хранит переиспользуемую логику для работы contentBlock
const {
    currentItemName,
    isShowContentBlock, 
    changeContentBlock 
} = contentBlockCompose();

const departments = ref<ArrayDepartmentClient>();

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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>