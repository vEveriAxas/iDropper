<template>
    <div class="main__container">
        <drawerPanelComp :drawer-width="drawerWidth" />
        <div class="main__content-wrapper">

            <!-- Фильтр панель -->
            <filterPanelComp />

            <!-- Контент Блок -->
            <div class="main__content-block">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import drawerPanelComp from '../components/navigationDrawer/drawerPanelComp';
import filterPanelComp from '../components/filterPanel/filterPanelComp.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const drawerWidth = ref(350);


onMounted(() => {
    console.log(route.meta.title);
});


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
    width: 100%;
    height: 100%;
}

.main__content-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    overflow: hidden;
    background-color: var(--bg-color-op-blue);
}
</style>