<template>
    <!-- Главный Блок для взаимодействия с Больницами -->
    <div class="hospitals-main">
        <itemsListComp/>
    </div>
</template>

<script setup lang="ts">
import itemsListComp from '../itemsList/itemsListComp.vue';
import { onMounted } from 'vue';
import { getAllHospitalDB } from '../../api/hospitalApi';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(async () => {
    console.log(route.meta.title === 'койки');
    console.log(await getAllHospitalDB());
});
</script>

<style scoped>
.hospitals-main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>