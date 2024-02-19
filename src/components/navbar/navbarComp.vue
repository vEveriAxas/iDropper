<template>
    <!-- Шапка сервиса -->
    <div class="navbar">
        <!-- Логотип -->
        <div class="navbar__logo-container">
            <h1 class="navbar__logo-text">iDropper</h1>
        </div>

        <!-- Кнопки взаимодйествия пользователя -->
        <div v-if="props.isShowUserActions" class="navbar__buttons">
            <v-icon class="icon-account" size="25px" icon="mdi-account-circle"></v-icon>
            <h3 class="navbar__username">John Doe Sergeevich</h3>
            <v-icon class="icon-logout" size="25px" icon="mdi-logout-variant"></v-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
    isShowUserActions?: boolean,
}>(), {
    isShowUserActions: false,
});



</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 7%;
    background-color: var(--bg-color-default);
    z-index: 35 !important;
}

.navbar__logo-container {
    width: max-content;
    display: flex;
    align-items: center;
    margin-left: 5%;
}

.navbar__logo-text {
    font-size: 2.7rem;
    color: var(--bg-color-white);
    user-select: none;
    cursor: pointer;
}

.navbar__buttons {
    width: max-content;
    max-width: 24%;
    display: flex;
    align-items: center;
    margin-right: 2.5%;
}

/* ICON-ACCOUNT */
.icon-account {
    color: var(--bg-color-white);
    transition: color .4s ease;
    cursor: pointer;
}

.icon-account:hover {
    color: var(--hover-default);
    transition: color .4s ease;
}

.icon-account:hover~.navbar__username {
    color: var(--hover-default);
    transition: color .4s ease;
}

/* ICON-LOGOUT */
.icon-logout {
    margin-left: 1.25rem;
    color: var(--bg-color-white);
    transition: color .4s ease;
    cursor: pointer;
}

.icon-logout:hover {
    color: var(--hover-default);
    transition: color .4s ease;
}

/* USERNAME-text */
.navbar__username {
    color: var(--bg-color-white);
    font-weight: 200;
    font-size: 1.1rem;
    margin-left: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: color .4s ease;
    cursor: pointer;
}

.navbar__username:hover {
    color: var(--hover-default);
    transition: color .4s ease;
}

.navbar__username:hover~.icon-account {
    color: var(--hover-default);
    transition: color .4s ease;
}</style>