<template>
    <div v-show="props.show" class="content-block">
        
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    show: boolean,
}>();

</script>

<style scoped>

.content-block {
    background-color: var(--bg-color-white);
    width: 60%;
    height: 95%;
    margin-right: 2rem;
    border-radius: 20px;
    box-shadow: var(--shadow);
    scale: 0;
}
</style>