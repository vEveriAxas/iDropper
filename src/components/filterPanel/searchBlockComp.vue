<template>
    <div class="search-block">
        <!-- Поле поиска -->
        <v-text-field
        class="input-block__search-input"
        bg-color="var(--bg-color-white)"
        v-model="value"
        color="var(--color-default)"
        rounded="lg"
        density="comfortable"
        variant="solo"
        hide-details
        label="Поиск"
        ></v-text-field>

        <!-- Кнопка Выполнить поиск -->
        <v-btn
        class="search-block__btn"
        icon="mdi-magnify"
        density="comfortable"
        color="var(--bg-color-default)"
        rounded="lg"
        ></v-btn>
    </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

// =================  V-MODEL  ===================
const value = defineModel<string>('value')

</script>

<style scoped>
.search-block {
    display: flex;
    align-items: center;
    width: 30%;
    padding: 5px;
}

.search-block__btn {
    width: 40px !important;
    height: 40px !important;
    margin-left: 10px;
    color: var(--color-white);
}
</style>