<template >
    <!-- Диалоговое окно для подтверждения удаления выбранного элемента -->
    <v-dialog class="deleted-dialog" v-model="modelValue">
        <template v-slot:default>
            <v-card style="
                    display: flex;
                    align-items: center;
                    padding: 10px;
                ">
                <div class="deleted-dialog-title">
                    <h2>
                        <span class="title__text">Вы уверены, что хотите удалить </span>
                        <span class="title__var">{{ props.title }} {{ props.subtitle }}</span>
                    </h2>
                </div>
                <!-- Блок кнопок -->
                <v-card-actions style="
                    width: 50%;
                    display: flex;
                    justify-content: space-evenly;
                    border-top: var(--border-thin);
                    margin-top: 1rem;
                    padding-top: 1rem;
                    ">
                    <!-- ДА -->
                    <v-btn 
                    color="red" 
                    text="Да" 
                    variant="outlined" 
                    density="comfortable"
                    @click="() =>emit('confirm')"></v-btn>

                    <!-- НЕТ -->
                    <v-btn 
                    color="var(--color-default)" 
                    text="Нет" 
                    variant="outlined" 
                    density="comfortable"
                    @click="() => emit('cancel')"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, defineModel } from 'vue';

const modelValue = defineModel<boolean>();
const props = defineProps<{
    title: string,
    subtitle: string,
}>();

const emit = defineEmits<{
    confirm: [];
    cancel: [];
}>();
</script>

<style scoped>
.deleted-dialog {
    width: 40%;
}
.deleted-dialog-title {
    display: flex;
    color: var(--bg-color-default-light-2);
    font-size: 0.8rem;
    padding: 0 2rem;
    text-align: center;
}

.title__var {
    color: var(--color-default);
    text-align: center;
}

</style>