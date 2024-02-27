<template>
    <div v-show="isShowNote" class="success-note">
        <h2 class="success-note__title">Успешно!</h2>
        <v-icon class="ml-2" icon="mdi-check-circle-outline"></v-icon>
    </div>
</template>

<script setup lang="ts">
import useMainStore from '../../store/mainStore';
import { ref, watch, defineEmits } from 'vue';
import gsap from 'gsap';
const store = useMainStore();

const emit = defineEmits<{
    complete: [],
}>();

const isShowNote = ref(false);

watch(() => store.isSuccessOperation, (isActive) => {
    console.log(isActive);
    if(isActive === true) {
        // Анимированное появление подсказки
        isShowNote.value = true;
        gsap.to('.success-note', { duration: 0.3, right: '1.5rem' });
        
    } else {
        // Скрытие подсказки
        gsap.to('.success-note', { duration: 0.3, right: '-20rem' })
            .then(() => {
                isShowNote.value = false
                emit('complete');
            });
    }
});

</script>

<style scoped>
.success-note {
    position: fixed;
    right: -20%;
    top: 10%;
    display: flex;
    align-items: center;
    width: max-content;
    height: max-content;
    padding: 1rem 2rem;
    border-radius: 0.7rem;
    color: var(--color-note-succ);
    user-select: none;
    background-color: var(--bg-color-note-succ);
}
</style>