// Главное Харнилище для работы с общим состоянием приложения

import { defineStore } from "pinia";
import { ref } from 'vue';
import CryptoJS from "crypto-js";

const useMainStore = defineStore('mainStore', () => {

    // ============================   STATE   ==========================
    const isSuccessOperation = ref(false);


    // ==========================   MUTATION   ========================
    function activeSuccessOperation(duration?: number) {
        isSuccessOperation.value = true;
        setTimeout(() => {
            isSuccessOperation.value = false;
        }, duration ?? 1500);
    }

    // =========================  ACTIONS  ===========================
    // Функция для шифрования объекта
    function encryptObject(object: object, key: string): string {
        try {
            const jsonString = JSON.stringify(object);
            const encrypted = CryptoJS.AES.encrypt(jsonString, key).toString();
            return encrypted;
        } catch (err) {
            throw new Error(`store/auth:encryptObject => ${err}`);
        }
    }
    // Функция для расшифровки объекта
    function decryptObject(encrypted: string, key: string) {
        try {
            const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
            const object = JSON.parse(decrypted);
            return object;
        } catch (err) {
            throw new Error(`store/auth:decryptObject => ${err}`);
        }
    }
    return {
        // State
        isSuccessOperation,

        // Mutations
        activeSuccessOperation,

        // Actions
        encryptObject,
        decryptObject,
    }
});

export default useMainStore;