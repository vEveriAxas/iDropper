<template>
    <div v-show="props.show" class="content-block">
        <div class="items-list__header">
            <!-- Заголовок контент блока -->
            <h1 v-if="props.contentTitle" class="items-list__header--title">{{ props.contentTitle }}</h1>

            <!-- Крутилка загрузки -->
            <v-progress-circular 
            v-else 
            indeterminate
            bg-color="var(--bg-color-white)"
            color="var(--bg-color-default)"
            :size="20" 
            :width="2"
            ></v-progress-circular>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    show: boolean,
    contentTitle: string | null,
}>();

</script>

<style scoped>

.content-block {
    position: absolute;
    right: 1.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-color-white);
    width: 61%;
    height: 95%;
    margin-left: 1.5rem;
    border-radius: 20px;
    box-shadow: var(--shadow);
    scale: 0;
    overflow: hidden;
}
.items-list__header {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    width: 94%;
    height: max-content;
    padding: 0.2rem;
    background-color: var(--bg-color-white);
    color: var(--color-default);
    border-bottom: var(--border-thin);
    z-index: 20;
}
.items-list__header--title {
    font-family: var(--font);
    font-size: 1.2rem;
    font-weight: normal;
}
</style>