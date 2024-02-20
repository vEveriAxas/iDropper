<template>
    <div class="item-comp" :style="computedBackgroundColor">
        <!-- Блок данных элемента  -->
        <div class="item-comp__data">
            <!-- Заголовок элемента -->
            <h3 class="item-comp__data--title">
                props_data: _value
            </h3>
            <!-- Подзаголовок элемента -->
            <p class="item-comp__data--description">props_subtitle</p>
        </div>

        <!-- Блок взаимодействия с элементом -->
        <div class="item-comp__actions">
            <v-btn
            v-show="props.itemData.id != route.query.select"
            style="font-size: .85rem;"
            bg-color="var(--bg-color-white)"
            variant="outlined"
            density="comfortable"
            color="var(--color-default)"
            elevation="2"
            @click="openItem(props.itemData.id)"
            >Открыть</v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps<{
    itemData: { 
        id: number | string,
    },
}>();

const emit = defineEmits<{
    selectItem: [id: number],
}>();

const computedBackgroundColor = computed(() => {
    if(props.itemData.id == route.query.select) {
        return { backgroundColor: 'var(--bg-color-gray)' }
    } else {
        return {}
    }
})

// Функция для открытия элемента
function openItem(id: number): void {
    emit('selectItem', id);
}

onMounted(() => {
    props.itemData.id !== route.query.select
});

</script>

<style scoped>
.item-comp {
    display: flex;
    align-items: center;
    height: 140px;
    width: 100%;
    margin-bottom: .5rem;
    border: var(--border-thin);
    border-radius: 10px;
    box-shadow: var(--shadow);
    padding: 0rem 2.5rem;

}
.item-comp__data {
    width: 80%;
    /* border: var(--border); */
    padding: 0 1.5rem 0 0;
    flex-grow: 4;
}
.item-comp__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: var(--border); */
    flex-grow: 1;
}

.item-comp__data--title {
    color:var(--color-default);
}
.item-comp__data--description {
    height: max-content;
    color:var(--color-gray);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: .6rem 0 0 .6rem;
}
</style>