<template>
    <div class="item-comp">
        <div class="item-comp__data">
            <h3 class="item-comp__data--title">
                Больница: {{ (props.indexProp)+1 }}
            </h3>
            <p class="item-comp__data--description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, laborum. Eius sunt, asperiores, ipsum nobis quisquam iusto voluptatibus delectus suscipit possimus, ipsa repellendus veritatis eligendi!</p>
        </div>
        <div class="item-comp__actions">
            <v-btn
            style="font-size: .85rem;"
            bg-color="var(--bg-color-white)"
            variant="outlined"
            density="comfortable"
            color="var(--color-default)"
            elevation="2"
            >Открыть</v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    indexProp: number,
}>();

</script>

<style scoped>
.item-comp {
    display: flex;
    height: 140px;
    width: 100%;
    margin-bottom: .5rem;
    border: var(--border-thin);
    border-radius: 10px;
    box-shadow: var(--shadow);
    padding: 2rem 2.5rem;
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