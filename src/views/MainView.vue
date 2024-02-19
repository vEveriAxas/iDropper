<template>
    <div class="main__container">
        <drawerPanelComp :drawer-width="drawerWidth" />
        <div class="main__content-block">
            <filterPanelComp />
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
}
.main__content-block {
    width: 85%;
    height: 100%;
    padding: 1.8rem 1em 1.8rem 1em;
    border: 1px solid black;
}

</style>