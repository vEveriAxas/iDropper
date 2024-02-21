<template>
    <div v-show="props.show" class="content-block">
        <div class="items-list__header">
            <h1 class="items-list__header--title">{{  props.contentTitle ?? 'item_name' }}</h1>
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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-color-white);
    width: 60%;
    height: 95%;
    margin-right: 2rem;
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
    background-color: var(--bg-color-white);
    color: var(--color-default);
    border-bottom: var(--border-thin);
    z-index: 20;
}
.items-list__header--title {
    font-family: var(--font);
    font-size: 1.4rem;
    font-weight: normal;
}
</style>