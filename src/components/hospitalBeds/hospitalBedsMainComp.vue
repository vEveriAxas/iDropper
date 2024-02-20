<template>
    <!-- Главный Блок для взаимодействия с КОЙКАМИ -->
    <div class="hospital-beds-main">
        <itemsListComp 
        :main-title="'койки'" 
        @select-item="changeContentBlock"/>
        <div v-show="isShowContentBlock" class="hospital-beds-main__content-block"></div>
    </div>
</template>

<script setup lang="ts">
import itemsListComp from '../itemsList/itemsListComp.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';

const route = useRoute(); 

const isShowContentBlock = ref(false);

function changeContentBlock() {
    isShowContentBlock.value = true;
    gsap.to('.hospital-beds-main__content-block', { scale: 1, duration: 0.5});
}

onMounted(() => {
    if(route.query.select) {
        isShowContentBlock.value = true;
        const contentBlock = document.querySelector('.hospital-beds-main__content-block') as HTMLDivElement;
        contentBlock.style.scale = '1';
    }
})
</script>

<style scoped>
.hospital-beds-main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
}
.hospital-beds-main__content-block {
    background-color: var(--bg-color-white);
    width: 60%;
    height: 95%;
    margin-right: 2rem;
    border-radius: 20px;
    box-shadow: var(--shadow);
    scale: 0;
}
</style>