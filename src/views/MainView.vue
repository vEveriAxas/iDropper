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

const drawerWidth = ref(450);


</script>

<style scoped>
.main__container {
    display: flex;
    height: 100%;
    border: 1px solid black;
}
.main__content-block {
    width: 100%;
    height: 100%;
    border: 1px solid black;
}

</style>