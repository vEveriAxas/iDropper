<template>
    <!-- Компонент для отрисовки Больницы, Отделений, Палат и Коек -->
    <div class="items-list__container" :style="{width: widthListComp}">
        <div class="items-list__header">
            <h1 class="items-list__header--title">Доступные {{ props.mainTitle }}</h1>
        </div>

        <!-- Отрисовка элементов -->
        <div class="items-list__wrapper">
            <itemComp 
            class="wrapper-item" v-for="(item, index) in props.items"  
            @select-item="(id, itemName) => selectItem(id, itemName)"
            :item-data="{id: item?.id, name: item?.name, address: item?.address}"
            :key="index"
            ></itemComp>
        </div>
    </div>
</template>

<script setup lang="ts">
import itemComp from './itemComp.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref, defineProps, onMounted, defineEmits } from 'vue';
import { IdClient, NameClient } from '../../types/generalTypes';
import gsap from 'gsap';

const route = useRoute();
const router = useRouter();

// EMITS
const emit = defineEmits<{
    selectItem: [id: IdClient, itemName: NameClient];
}>();
// PROPS
const props = defineProps<{
    mainTitle: string,
    items: Array<any>,
}>();

// ============   DATA   ==============
const widthListComp = ref('95%');  // Ширина для items-list__container


// ============   METHODS   ============
// Функция триггерит выбор элемента списка и проявление контентного блока
function selectItem(id: IdClient, itemName: NameClient) {
    router.push({query: { select: id }});
    gsap.to('.items-list__container', {width: '35%', duration: 0.4})
        .then(() => {
            emit('selectItem', id, itemName);
        });   
}

// ============   LIFECYCLE HOOKS   ============
onMounted(() => {
    // Если выбран како-либо элемент (запись в query параметры) при перезагрузке страницы то сохранаяем ширину 35%
    if(route.query.select) {
        widthListComp.value = '35%';
    }
})

</script>

<style scoped>
.items-list__container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0 2rem;
    width: 95%;
    height: 95%;
    background-color: var(--bg-color-white);
    border-radius: 20px;
    box-shadow: var(--shadow);
    overflow: hidden;
}
.items-list__header {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    width: 94%;
    height: max-content;
    background-color: var(--bg-color-white);
    color: var(--color-default);
    border-bottom: var(--border-thin);
    z-index: 20;
}
.items-list__header--title {
    font-family: var(--font);
    font-size: 1.4rem;
    font-weight: normal;
}
.items-list__wrapper {
    position: absolute;
    bottom: 0;
    width: 94%;
    height: 98%;
    max-height: 100%;
    overflow: auto;
    padding: 0rem 2rem 2rem 2rem;
    z-index: 10;
}
.wrapper-item {
    margin-top: 3.5rem;
} 
.wrapper-item + .wrapper-item {
    margin-top: 1rem;
}
</style>