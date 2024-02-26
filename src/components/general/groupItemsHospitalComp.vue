<template>
    <v-select
    class="group-items"
    :label="props.labelCompbox"
    :items="props.itemList"
    @update:menu="(e: boolean) => openMenu(e)"
    rounded="lg"
    variant="solo"
    bg-color="var(--bg-color-white)"
    color="var(--color-default)"
    base-color="var(--color-default)"
    :density="'compact'"
    :hide-details="true"
>
    <template v-slot:item="{item}">
        <div class="group-items__item">
            <p>{{ item.value?.name }}</p>
            <v-btn 
            class="group-items__btn"
            color="var(--bg-color-default)"
            variant="outlined"
            :density="'compact'"
            >Перейти</v-btn>
        </div>
    </template>
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
    itemList: Array<any>,
}>();

// =================  EMITS  ===================
const emit = defineEmits<{
    loadItems: [],
    closeMenu: [],
}>()

// =================  DATA  ===================
const isLoading = ref<boolean>(false);

// =================  METHODS  ===================

// Функция отправляет событие для загрузки элементов списка с БД
function openMenu(isOpenMenu: boolean) {
    if(props.itemList.length <= 0 &&  isOpenMenu === true) {
        isLoading.value = true;
        emit('loadItems');
    } else emit('closeMenu');
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
.group-items {
    width: 15% !important;
    margin: 0 10px;
}
.group-items__item {
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .5rem 0;
}
.group-items__btn {

}
</style>