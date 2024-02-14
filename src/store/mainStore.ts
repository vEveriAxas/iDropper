// Главное Харнилище для работы с общим состоянием приложения

import { defineStore } from "pinia"; 
import { ref } from 'vue';

const useMainStore = defineStore('mainStore', () => {
    const state = ref(0);
    return {
        state,
    }
});

export default useMainStore;