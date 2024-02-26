<template>
    <v-dialog v-model="modelValue" width="auto">
        <v-card class="dialog__wrapper">
            <form class="dialog__form">
                <div class="dialog__form--top">
                    <h1 class="top-title">{{ (name)? name : `Больница ${id}` }}</h1>
                </div>

                <!-- Общие данные -->
                <div class="dialog__form--general-data">
                    <!-- Имя -->
                    <v-card-subtitle>Название</v-card-subtitle>
                    <v-text-field
                    class="general-data__input"
                    bg-color="var(--bg-color-white)"
                    v-model="name"
                    color="var(--color-default)"
                    rounded="xs"
                    :density="'compact'"
                    variant="solo"
                    hide-details
                    ></v-text-field>

                    <!-- Адрес -->
                    <v-card-subtitle>Адрес</v-card-subtitle>
                    <v-text-field
                    class="general-data__input"
                    bg-color="var(--bg-color-white)"
                    v-model="address"
                    color="var(--color-default)"
                    rounded="xs"
                    :density="'compact'"
                    variant="solo"
                    hide-details
                    ></v-text-field>

                    <!-- Управляющий -->
                    <v-card-subtitle>Управляющий</v-card-subtitle>
                    <v-select
                    class="general-data__input"
                    bg-color="var(--bg-color-white)"
                    v-model="chiefName"
                    color="var(--color-default)"
                    rounded="xs"
                    :items="['Сотрудник', 'Управляющий', 'Администратор']"
                    :density="'compact'"
                    variant="solo"
                    hide-details
                    >
                        <template v-slot:selection="{item}">
                            <p style="font-size: 13px;">{{ (chiefName.length)? chiefName : item.value }}</p>
                        </template>
                    </v-select>

                    <!-- Количество отделений -->
                    <div class="general-data__departments-amount">
                        <div style="display: flex; margin-bottom: 0.4rem;">
                            <v-card-subtitle>Количество отделений: </v-card-subtitle>
                            <p>0</p>
                        </div>
                        <!-- Список отделений -->
                        <groupItemsHospitalComp 
                        style="width: 80% !important;" 
                        :label-compbox="'Отделения'" 
                        :item-list="departmentsList"
                        @load-items="loadDepartments"
                        @close-menu="departmentsList.length = 0"
                        />
                    </div>
                    
                </div>
            </form>
            <div class="dialog__actions">
                <v-btn variant="tonal" color="var(--bg-color-default)" class="mr-6">Сохранить</v-btn>
                <v-btn variant="outlined" color="red" @click="emit('close')">Закрыть</v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import groupItemsHospitalComp from '../general/groupItemsHospitalComp.vue';
import { HospitalClient } from '../../types/hospitalType';
import { ArrayDepartmentClient } from '../../types/departmentType';
import { getHospitalDepartmentsDB } from '../../api/departmentsApi';
import { ref, defineModel, defineEmits, defineProps, watch } from 'vue';

const props = defineProps<{
    data: HospitalClient | null | undefined,
}>();

const modelValue = defineModel<boolean>();
const emit = defineEmits<{
    close: [],
}>();

const departmentsList = ref<ArrayDepartmentClient>([]);
const id = ref<null | string | number>('');
const name = ref<string | null>('');
const address = ref<string | null>('');
const chiefName = ref<string>('');

// Получени  отделений выбранной больницы
async function loadDepartments() {
    try {
        // При необходмости получаем список отделений
        departmentsList.value = await getHospitalDepartmentsDB(props.data?.id);
    } catch (err) {
        throw new Error(`components/hospitals/hospitalDialogComp.vue  => ${err}`)
    }
}

watch(() => props.data, (newValue) => {
    if(typeof newValue === 'object' && newValue !== null) {
        if(newValue.id) {
            id.value = newValue.id;
        }
        if(newValue.name) {
            name.value = newValue.name;
        }
        if(newValue.address) {
            address.value = newValue.address;
        }
        if(newValue.chiefId) {
            if(typeof newValue.chiefId === 'number') {
                chiefName.value = newValue.chiefId + '';
            }
        }
    } 
    
})

</script>

<style scoped>
.dialog__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    height: max-content;

}
.dialog__form {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.dialog__actions {
    display: flex;
    justify-content: flex-end;
    width: 60%;
    border-top: var(--border);
    padding: 2rem 0;
}
.dialog__form--top {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 1rem 2rem 1rem;
    color: var(--color-default);
    background-color: var(--bg-color-op-blue);
    backdrop-filter: blur(6px);
    z-index: 90;
}
.top-title {
    font-size: 1.4rem;
}
.data-title {
    display: flex;
    justify-content: center;
    font-size: 1.1em;
}
.dialog__form--general-data {
    width: 60%;
    padding: 1rem;
    border-top: var(--border);
}
.general-data__input {
    margin-bottom: 1rem;
}
.general-data__departments-amount {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 1.5rem;
    border: 1px solid black;
}
.general-data__departments-amount p {
    color: var(--color-default);
}

</style>