<template>
    <!-- Компонент для отрисовки Больницы, Отделений, Палат и Коек -->
    <div class="items-list__container" :style="{width: widthListComp, left: leftPosition }">
        <div class="items-list__header">
            <h1 class="items-list__header--title">Доступные {{ props.mainTitle }}</h1>
        </div>

        <!-- Диалоговое окно -->
        <dialogComp v-model="isShowDialog" @close="isShowDialog = false" />

        <div class="items-list__content-container" v-if="!!props.items.length" >
            <div class="items-list__action-block">
                <v-btn
                @click="isShowDialog = true"
                append-icon="mdi-plus"
                style="color: var(--color-white);"
                :density="'comfortable'"
                color="var(--bg-color-default)"
                >Создать</v-btn>
            </div>
    
            <!-- Отрисовка элеменитов списка -->
            <v-table
            class="items-list__wrapper"
            :density="'comfortable'"
            fixed-header>
                <thead>
                    <tr>
                        <th class="text-left numeric-th">
                            №
                        </th>
                        <th class="text-left">
                            Название
                        </th>
                        <th class="text-left address-th">
                            Адрес
                        </th>
                        <th class="text-left actions-th">
                            Действия
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(item, index) in props.items"
                        :key="item.id"
                    >
                        <td class="list-item">{{ index+1 }}</td>
                        <td class="list-item">{{ item.name }}</td>
                        <td class="list-item">{{ item.address }}</td>
                        <!-- Actions -->
                        <td class="list-item actions-td">
                            <v-btn class="actions__btn" rounded="xl" variant="text" width="max-content">
                                <v-icon icon="mdi-pen" :color="'var(--color-default)'"></v-icon>
                            </v-btn>
                            <v-btn class="actions__btn del" rounded="xl" variant="text" :width="'15px'">
                                <v-icon icon="mdi-delete" :color="'red'"></v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </div>

        <!-- Крутилка загрузки -->
        <v-progress-circular 
        v-else 
        indeterminate
        bg-color="var(--bg-color-white)"
        color="var(--bg-color-default)"
        :size="60" 
        :width="6"
        ></v-progress-circular>
    </div>
</template>

<script setup lang="ts">
import dialogComp from '../general/dialogComp.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref, defineProps, onMounted, defineEmits } from 'vue';
// import { IdClient, NameClient } from '../../types/generalTypes';
// import gsap from 'gsap';

const route = useRoute();
// const router = useRouter();

// EMITS
// const emit = defineEmits<{
//     selectItem: [id: IdClient, itemName: NameClient];
// }>();
// PROPS
const props = defineProps<{
    mainTitle: string,
    items: Array<any>,
}>();

// ============   DATA   ==============
const widthListComp = ref('95%');  // Ширина для items-list__container
const leftPosition = ref('1.5%');  // Ширина для items-list__container
const isShowDialog = ref(false);

// ============   METHODS   ============
// Функция триггерит выбор элемента списка и проявление контентного блока
// function selectItem(id: IdClient, itemName: NameClient) {
//     router.push({query: { select: id }});
//     gsap.to('.items-list__container', {width: '35%', left: '1.5%', duration: 0.4})
//         .then(() => {
//             emit('selectItem', id, itemName);
//         });   
// }

// ============   LIFECYCLE HOOKS   ============
onMounted(() => {
    // Если выбран како-либо элемент (запись в query параметры) при перезагрузке страницы то сохранаяем ширину 35%
    if(route.query.select) {
        widthListComp.value = '35%';
    } else {
        // По умолчанию убираем смещение от края 1.5% если никакого элемента не выбрано
        leftPosition.value = '';
    }
})

</script>

<style scoped>
.items-list__container {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100% !important;
    height: 100% !important;
    background-color: var(--bg-color-white);
    box-shadow: var(--shadow);
    overflow: hidden;
}
.items-list__header {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: max-content;
    background-color: var(--bg-color-default);
    color: var(--color-white);
    border-bottom: var(--border-thin);
    z-index: 20;
}
.items-list__header--title {
    font-family: var(--font);
    font-size: 1.3rem;
    font-weight: normal;
}
.items-list__content-container {
    bottom: 0;
    width: 98%;
    height: 98%;
    max-height: 100%;
    padding: 0.9rem 1rem 2rem 4rem;
}
.items-list__action-block {
    position: relative;
    margin: 2rem 0 1rem 0;
}
.list-item {
    border-top: var(--border-thin);
}
.numeric-th {
    width: 3%;
}
.address-th {
    width: 50%;
}
.actions-th {
    width: 10%;
}
.actions-td {
    display: flex;
    align-items: center;
}
.actions__btn {
    border: var(--border-thin);
}
.actions__btn.del {
    border: 1px solid red;
}
.items-list__wrapper {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    margin-top: 5px;
    border: var(--border-thin);
    z-index: 10;
}
.wrapper-item {
    border-bottom: var(--border-thin);
} 
.wrapper-item + .wrapper-item {
    border-bottom: var(--border-thin);
}
</style>