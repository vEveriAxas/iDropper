<template>
    <!-- Главный Блок для взаимодействия с ПАЛАТАМИ -->
    <div class="hospital-rooms-main">

        <!-- Список Палат -->
        <itemsListComp 
        :main-title="'палаты'"
        :items="hospitalRooms"
        @select-item="changeContentBlock"/>

        <!-- Контент Блок -->
        <contentBlockComp
        class="hospital-beds-main__content-block"
        :show="isShowContentBlock"
        :content-title="currentItemName"/>
    </div>
</template>

<script setup lang="ts">
import itemsListComp from '../itemsList/itemsListComp.vue';
import contentBlockComp from '../contentBlock/contentBlockComp.vue';
import contentBlockCompose from '../../composable/contentBlockCompose';
import { ref, onMounted } from 'vue';
import { getAllHospitalRoomsDB } from '../../api/hospitalRoomsApi';
// TYPES
import { ArrayHospitalRoomClient } from '../../types/hospitalRoomType'; 

// Компонуемый файл хранит переиспользуемую логику для работы contentBlock
const { 
    currentItemName, 
    isShowContentBlock, 
    changeContentBlock 
} = contentBlockCompose();

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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>