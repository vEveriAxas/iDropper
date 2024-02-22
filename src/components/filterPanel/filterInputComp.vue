<template>
    <v-select
    class="filter-input"
    :label="props.labelCompbox"
    :items="props.itemList"
    clearable
    @update:menu="(e: boolean) => openMenu(e)"
    rounded="lg"
    variant="solo"
    bg-color="var(--bg-color-white)"
    color="var(--color-default)"
    base-color="var(--color-default)"
    :density="'comfortable'"
    :hide-details="true"
>
    <!-- Компонент для отображения загрузки -->
    <template v-if="isLoading" v-slot:no-data>
        <v-list-item class="d-flex justify-center" :density="'compact'">
            <!-- Крутилка загрузки -->
            <v-progress-circular 
            indeterminate
            bg-color="var(--bg-color-white)"
            color="var(--bg-color-default)"
            :size="20" 
            :width="2"
            ></v-progress-circular>
        </v-list-item>
    </template>
</v-select>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, defineModel } from 'vue';

// =================  V-MODEL  ===================
defineModel<string>('checked')

// =================  PROPS  ===================
const props = defineProps<{
    labelCompbox: string,
    itemList: Array<string>,
}>();

// =================  EMITS  ===================
const emit = defineEmits<{
    loadItems: [],
}>()

// =================  DATA  ===================
const isLoading = ref<boolean>(false);

// =================  METHODS  ===================

// Функция отправляет событие для загрузки элементов списка с БД
function openMenu(isOpenMenu: boolean) {
    if(props.itemList.length <= 0 &&  isOpenMenu === true) {
        isLoading.value = true;
        emit('loadItems');
    }
}

// =================  COMPUTED  ===================

// =================  WATCH  ===================

// Отслеживает изменение массива приходящих элементов и отключает progress-circle
watch(() => props.itemList.length, (newLength: number, oldLength: number) => {
    if(oldLength === 0 && newLength > 0) {
        isLoading.value = false;
    }
});

// =================  LIFECYCLE HOOKS  ===================

</script>

<style scoped>
.filter-input {
    width: 15% !important;
    margin: 0 10px;
}
</style>