<template>
    <div class="employees-main">
        <div class="employees-main__wrapper">
            <employeesListComp :employees="employees" />
        </div>
    </div>
</template>

<script setup lang="ts">
import employeesListComp from './employeesListComp.vue';
import { getAllDUsersDB } from '../../api/userApi';
import { ArrayUserClient } from '../../types/userType'
import { ref, onMounted } from 'vue';

const employees = ref<ArrayUserClient>([]);

// Получение массива СОТРУДНИКОВ с БД
onMounted(async () => {
    try {
        // employees.value = await getAllDUsersDB();
        employees.value = [{
            id: 1,
            fullName: "John Doe",
            tel: "555-555-5555",
            email: "ex@example1.com",
            isActive: true,
            isSuperuser: false,
            lastActivity: "2023-02-14T12:34:56.789Z"
        },];
    } catch (err) {
        throw new Error(`components/employees/employeesComp: onMounted  => ${err}`);
    }
});

</script>

<style scoped>
.employees-main {
    width: 100%;
    height: 100%;
    padding: 0 1rem 0 4rem;
}

.employees-main__wrapper {
    width: 100%;
    height: 100%;
    background-color: var(--bg-color-white);
}
</style>