// Харнилище для работы с системой авторизации
import { defineStore } from "pinia"; 
import { ref } from 'vue'

const useAuthStore = defineStore('authStore', () => {
    const state = ref(1);
    return {
        state,
    }
});

export default useAuthStore;