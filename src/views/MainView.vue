<template>
    <div class="main__container">
        <drawerPanelComp :drawer-width="drawerWidth" />
        <div class="main__content-block">
        </div>
    </div>
</template>

<script setup lang="ts">
import drawerPanelComp from '../components/navigationDrawer/drawerPanelComp';
import { ref } from 'vue';

const drawerWidth = ref(450);


</script>

<style scoped>
.main__container {
    display: flex;
    width: 100%;
    height: 100%;
}
.main__content-block {
    width: 100%;
    height: 100%;
    border: 1px solid black;
}

</style>