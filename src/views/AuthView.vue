<template>
    <div class="auth-view">
        <success-note-comp @complete="isCompleteAuth"></success-note-comp>
        <v-card class="auth-form__container">
            <v-form class="auth-form" @submit.prevent>
                <!-- Заголовок "Авторизация" -->
                <v-card-title class="auth-form__title">Авторизация</v-card-title>

                <!-- Блок E-mail -->
                <div class="auth-form__input-block">
                    <v-card-subtitle class="input-block__subtitle">E-mail</v-card-subtitle>
                    <v-text-field 
                    class="input-block__input"
                    bg-color="var(--bg-color-white)"
                    v-model.trim="email"
                    variant="solo-filled"
                    :rules="emailRules"
                    rounded="lg"
                    placeholder="Адрес электронной почты"
                    ></v-text-field>
                </div>
                
                <!-- Блок Пароль -->
                <div class="auth-form__input-block">
                    <v-card-subtitle class="input-block__subtitle">Пароль</v-card-subtitle>
                    <v-text-field 
                    class="input-block__input"
                    v-model.trim="password"
                    variant="solo-filled"
                    :rules="passwordRules"
                    rounded="lg"
                    bg-color="var(--bg-color-white)"
                    placeholder="Введите пароль"
                    ></v-text-field>
 
                </div>
                <v-btn 
                class="auth-form__confirm-btn"
                density="default"
                @click="login"
                :loading="isLoading"
                >Подтвердить</v-btn>

                <!-- Блок Подсказка "Забыли пароль?" -->
                <div class="auth-form__hint">
                    <p class="hint-question">Забыли пароль?</p>
                    <a class="hint-href" href="">Нажмите здесь</a>
                    <v-spacer></v-spacer>
                </div>
            </v-form>
        </v-card>
    </div>
</template>
  
<script setup lang="ts">
import { loginEmailPassword } from '../api/authApi';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter(); 
const isLoading = ref(false);

const email = ref<string>('');
const password = ref<string>('');

async function login() {
    try {
        isLoading.value = true;
        await loginEmailPassword(email.value, password.value);
    } catch (err) {
        throw new Error(`views/AuthView: login  => ${err}`);
    } finally {
        isLoading.value = false;
    }
}

// После успешной авторизации и скрытия уведомления, переходим на маршруты системы
function isCompleteAuth() {
    try {
        router.push({ name: 'main' });
    } catch (err) {
        throw new Error(`views/AuthView: isCompleteAuth  => ${err}`);
    }
}

// Правила ввода E-Mail
const emailRules = ref([
    (value: string) => !!value || "E-mail обязательное поле",
    (value: string) => /.+@.+\..+/.test(value) || "Введите корректный E-mail",
]);

// // Правила ввода Пароля
const passwordRules = ref([ 
  (value: string) => !!value || "Пароль обязательное поле",
  (value: string) => (value && value.length >= 8) || "Минимальная длина пароля 8 символов",
]);


</script>

<style scoped>
.auth-view {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.auth-form__container {
    width: 600px;
    height: 570px;
    box-shadow: var(--shadow);
    background-color: var(--bg-color-op-blue);
    border-radius: 15px !important;
    overflow: hidden;
}
.auth-form__input-block {
    margin-top: 50px;
}

.auth-form__input-block + .auth-form__input-block {
    margin-top: 20px;
}
.auth-form__confirm-btn {
    margin: 1.5rem 1.2rem 0 0;
    align-self: flex-end;
    font-size: 13px;
    color: var(--color-default);
    border-radius: 10px;
}
.input-block__subtitle {
    color: var(--color-default);
    font-weight: 400;
    font-size: 16px;
}
.auth-form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.2rem 3.8rem;
}
.auth-form__title {
    font-size: 3.1rem;
    color: var(--color-default);
    font-weight: 600;
}
.input-block__input {
    margin-top: .3rem;
}
.auth-form__hint {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
}
.hint-question {
    color: var(--color-);
}
.hint-href {
    margin-left: .6rem;
}
</style>