<template>
    <!-- Компонент для отрисовки Списка Сотрудников -->
    <div class="employees-list__container">

        <!-- Заголовок -->
        <div class="employees-list__header">
            <h1 class="employees-list__header--title">Сотрудники</h1>
        </div>

        <!-- Диалоговое окно -->
        <dialogComp 
        v-model="isShowDialog"
        @close="isShowDialog = false" 
        :employee-data="selectEmployeeData"
        />

        <!-- Контент список -->
        <div class="employees-list__content-container" v-if="!!props.employees.length">
            <!-- Отрисовка элеменитов списка -->
            <v-table class="employees-list__wrapper" :density="'comfortable'" fixed-header>
                <thead>
                    <tr>
                        <th class="text-left th"
                            style="background-color: var(--bg-color-op-blue) !important; backdrop-filter: blur(9px);">
                            №
                        </th>
                        <th class="text-left th">
                            ФИО
                        </th>
                        <th class="text-left th">
                            Телефон
                        </th>
                        <th class="text-left th">
                            E-mail
                        </th>
                        <th class="text-left th">
                            Статус
                        </th>
                        <th class="text-center th actions-th">
                            Действия
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                    class="row-hover" 
                    @click="() => selectEmployee(employee)"
                    v-for="(employee, index) in props.employees" 
                    :key="employee.id">
                        <!-- № Номер -->
                        <td class="list-item">{{ index + 1 }}</td>
                        <!-- ФИО -->
                        <td class="list-item">{{ employee?.fullName }}</td>
                        <!-- ТЕЛЕФОН -->
                        <td class="list-item">{{ employee?.tel }}</td>
                        <!-- E-mail -->
                        <td class="list-item">{{ employee?.email }}</td>
                        <!-- СТАТУС -->
                        <td class="list-item">{{ employee?.isActive }}</td>
                        <!-- ДЕЙСТВИЯ -->
                        <td class="list-item actions-td">
                            <v-btn class="actions__btn" rounded="xl" variant="text" width="max-content">
                                <v-icon icon="mdi-pen" :color="'var(--color-default)'"></v-icon>
                            </v-btn>
                            <v-btn class="actions__btn del" rounded="xl" variant="text" :width="'15px'">
                                <v-icon icon="mdi-delete" :color="'red'"></v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </div>

        <!-- Крутилка загрузки -->
        <v-progress-circular v-else indeterminate bg-color="var(--bg-color-white)" color="var(--bg-color-default)"
            style="position: absolute;" :size="60" :width="6"></v-progress-circular>
    </div>
</template>

<script setup lang="ts">
import dialogComp from '../general/dialogComp.vue';
import { UserClient } from '../../types/userType';
import { ref, defineProps } from 'vue';

const props = defineProps<{
    employees: Array<any>,
}>();

// ============   DATA   ==============
const isShowDialog = ref(false);
const selectEmployeeData = ref<UserClient | null | undefined>(null);

// ============   METHODS   ============
function selectEmployee(employee: UserClient | undefined | null) {
    selectEmployeeData.value = employee;
    isShowDialog.value = true;
}
// ============   LIFECYCLE HOOKS   ============


</script>

<style scoped>

.row-hover {
    transition: background-color 0.4s ease;
    cursor: pointer;
}
.row-hover:hover {
    background-color: rgba(128, 128, 128, 0.2);
    transition: background-color 0.4s ease;
}

.employees-list__container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100% !important;
    height: 100% !important;
    background-color: var(--bg-color-white);
    overflow: hidden;
}

.employees-list__header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: max-content;
    background-color: var(--bg-color-default);
    color: var(--color-white);
    border-bottom: var(--border-thin);
    z-index: 20;
    margin: 1.2rem 0 auto 0;
}

.employees-list__header--title {
    font-family: var(--font);
    font-size: 1rem;
    font-weight: normal;
}

.employees-list__content-container {
    position: relative;
    width: 99%;
    height: 98%;
    top: 0;
    height: max-content;
    max-height: 100%;
}

.employees-list__action-block {
    position: relative;
    margin: 2rem 0 1rem 0;
}

.th {
    background-color: var(--bg-color-op-blue) !important;
    backdrop-filter: blur(9px);
    font-weight: 100;
    font-size: 13px;
}

.actions-th {
    width: 10%;
}

.actions-td {
    display: flex;
    align-items: center;
}

.actions__btn {
    border: var(--border-thin);
}

.actions__btn.del {
    border: 1px solid red;
}

.employees-list__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    margin-top: 5px;
    padding-bottom: 2rem;
    z-index: 10;
}
</style>