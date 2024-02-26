<template>
    <!-- Компонент для отрисовки Списка Сотрудников -->
    <div class="hospitals-list__container">

        <!-- Заголовок -->
        <div class="hospitals-list__header">
            <h1 class="hospitals-list__header--title">Больницы</h1>
        </div>

        <!-- Диалоговое окно с данными о выбранном элементе -->
        <hospitalsDialogComp 
        v-model="isShowDialog"
        @close="isShowDialog = false" 
        :data="selectHospitalData"
        />

        <!-- Диалоговое окно для подтверждения удаления элемента -->
        <deletedDialogComp 
        v-model="isShowDeletedDialog" 
        @cancel="isShowDeletedDialog = false"
        :title="`больницу `"
        :subtitle="`${selectHospitalData?.name}`"
        />

        <!-- Контент список -->
        <div class="hospitals-list__content-container" v-if="!!props.hospitals.length">
            <!-- Отрисовка элеменитов списка -->
            <v-table class="hospitals-list__wrapper" :density="'comfortable'" fixed-header>
                <thead>
                    <tr>
                        <th class="text-left th"
                            style="background-color: var(--bg-color-op-blue) !important; backdrop-filter: blur(9px);">
                            №
                        </th>
                        <th class="text-left th">
                            Название
                        </th>
                        <th class="text-left th">
                            Адрес
                        </th>
                        <th class="text-left th">
                            Управляющий
                        </th>
                        <th class="text-left th actions-th">
                            Действия
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                    class="row-hover" 
                    @click="() => selectHospital(hospital)"
                    v-for="(hospital, index) in props.hospitals" 
                    :key="hospital.id">
                        <!-- № Номер -->
                        <td class="list-item">{{ index + 1 }}</td>
                        <!-- Название -->
                        <td class="list-item">{{ hospital?.name }}</td>
                        <!-- Адрес -->
                        <td class="list-item">{{ hospital?.address }}</td>
                        <!-- Управляющий -->
                        <td class="list-item">{{ hospital?.chiefId }}</td>
                        <!-- ДЕЙСТВИЯ -->
                        <td class="list-item actions-td">

                            <!-- Редактировать -->
                            <v-btn 
                            class="actions__btn" 
                            rounded="xs" 
                            variant="text" 
                            width="max-content"
                            :density="'compact'"
                            >
                                <v-icon icon="mdi-pen" :color="'var(--color-default)'"></v-icon>
                            </v-btn>

                            <!-- Удалить -->
                            <v-btn 
                            class="actions__btn del"
                            @click.stop="selectHospital(hospital, true)"
                            rounded="xs" 
                            variant="text" 
                            :width="'15px'"
                            :density="'compact'"
                            >
                                <v-icon icon="mdi-delete" :color="'red'"></v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </div>

        <!-- Крутилка загрузки -->
        <span class="progress-circular" v-else>
            <v-progress-circular
            indeterminate 
            bg-color="var(--bg-color-white)" 
            color="var(--bg-color-default)"
            :size="60" 
            :width="6"
            ></v-progress-circular>
        </span>
    </div>
</template>

<script setup lang="ts">
import hospitalsDialogComp from './hospitalsDialogComp.vue';
import deletedDialogComp from '../general/deletedDialogComp';
import { HospitalClient } from '../../types/hospitalType';
import { ref, defineProps } from 'vue';

const props = defineProps<{
    hospitals: Array<any>,
}>();

// ============   DATA   ==============
const isShowDialog = ref(true);
const isShowDeletedDialog = ref(false);
const selectHospitalData = ref<HospitalClient | null | undefined>(null);

// ============   METHODS   ============
function selectHospital(hospital: HospitalClient | undefined | null, isDeleted?: boolean) {
    selectHospitalData.value = hospital;
    if(isDeleted !== true) {
        isShowDialog.value = true;
    } else {
        isShowDeletedDialog.value = true;
    }
}

// ============   LIFECYCLE HOOKS   ============

</script>

<style scoped>
.progress-circular {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.45);
    z-index: 999;
}
.row-hover {
    transition: background-color 0.4s ease;
    cursor: pointer;
}
.row-hover:hover {
    background-color: rgba(128, 128, 128, 0.2);
    transition: background-color 0.4s ease;
}

.hospitals-list__container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100% !important;
    height: 100% !important;
    background-color: var(--bg-color-white);
    overflow: hidden;
}

.hospitals-list__header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: max-content;
    background-color: var(--bg-color-default);
    color: var(--color-white);
    border-bottom: var(--border-thin);
    z-index: 20;
}

.hospitals-list__header--title {
    font-family: var(--font);
    font-size: 1rem;
    font-weight: normal;
}

.hospitals-list__content-container {
    position: relative;
    width: 99%;
    height: 98%;
    top: 0;
    /* height: max-content; */
    max-height: 100%;
}

.hospitals-list__action-block {
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

.hospitals-list__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    margin-top: 5px;
    padding-bottom: 2rem;
    z-index: 10;
}
</style>