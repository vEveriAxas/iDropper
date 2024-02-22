<template>
    <v-dialog v-model="modelValue" width="auto">
        <v-card>
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="emit('close')" block>Close Dialog</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { defineModel, defineEmits } from 'vue';

const modelValue = defineModel<boolean>();
const emit = defineEmits<{
    close: [],
}>();

</script>

<style scoped></style>