import { aliases } from 'vuetify/iconsets/mdi';
<template>
    <div class="auth-view">
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
                    variant="solo-filled"
                    rounded="lg"
                    placeholder="Адрес электронной почты"
                    ></v-text-field>
                </div>
                
                <!-- Блок Пароль -->
                <div class="auth-form__input-block">
                    <v-card-subtitle class="input-block__subtitle">Пароль</v-card-subtitle>
                    <v-text-field 
                    class="input-block__input"
                    variant="solo-filled"
                    rounded="lg"
                    bg-color="var(--bg-color-white)"
                    placeholder="Введите пароль"
                    ></v-text-field>
 
                </div>
                <v-btn class="auth-form__confirm-btn">Подтвердить</v-btn>

                <!-- Блок Подсказка "Забыли пароль?" -->
                <div class="auth-form__hint">
                    <v-card-text>Забыли пароль?</v-card-text>
                    <a href="">Нажмите здесь</a>
                </div>
            </v-form>
        </v-card>
    </div>
</template>
  
<script setup lang="ts">

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
    height: 594px;
    box-shadow: var(--shadow);
    background-color: var(--bg-color-op-blue);
    border-radius: 15px !important;
    overflow: hidden;
}
.auth-form__input-block {
    margin-top: 50px;
}
.input-block__subtitle {
    color: var(--color-default);
    font-weight: 400;
    font-size: 16px;
}
.auth-form {
    height: 100%;
    width: 100%;
    padding: 2.2rem 3.8rem;
}
.auth-form__title {
    font-size: 3.1rem;
    color: var(--color-default);
    font-weight: 600;
}
.input-block__input {
}

</style>