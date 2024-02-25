<template>
    <!-- Главный Блок для взаимодействия с ПАЛАТАМИ -->
    <div class="hospital-rooms-main">

        <!-- Список Палат -->
        <itemsListComp 
        :main-title="'палаты'"
        :items="hospitalRooms"
        @select-item="false"/>


    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// COMPONENTS
import itemsListComp from '../itemsList/itemsListComp.vue';
// API
import { getAllHospitalRoomsDB } from '../../api/hospitalRoomsApi';
// TYPES
import { ArrayHospitalRoomClient } from '../../types/hospitalRoomType'; 


// Полученный с БД массив данных
const hospitalRooms = ref<ArrayHospitalRoomClient>([]);

// Получение массива ПАЛАТ с БД
onMounted(async () => {
    try {
        hospitalRooms.value = await getAllHospitalRoomsDB();
    } catch (err) {
        throw new Error(`components/hospitalRooms/hospitalRoomsMainComp: onMounted  => ${err}`);
    }
});

</script>

<style scoped>
.hospital-rooms-main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>