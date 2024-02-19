<template>
    <div class="main__container">
        <drawerPanelComp :drawer-width="drawerWidth" />
        <div class="main__content-wrapper">

            <!-- Фильтр панель -->
            <filterPanelComp />

            <!-- Контент Блок -->
            <div class="main__content-block">
                <router-view v-slot="{ Component }">
                    <transition name="slide-left">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import drawerPanelComp from '../components/navigationDrawer/drawerPanelComp';
import filterPanelComp from '../components/filterPanel/filterPanelComp.vue';
import { ref } from 'vue';

const drawerWidth = ref(350);


</script>

<style scoped>
.main__container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.main__content-wrapper {
    width: 85%;
    height: 100%;
    padding: 1.2rem 1em;
}

.main__content-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 88%;
    overflow: hidden;
    margin-top: 1rem;
    border-radius: 20px;
    background-color: var(--bg-color-op-blue);
    box-shadow: var(--shadow);
}
</style>