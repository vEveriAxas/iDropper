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
            bg-color="var(--bg-color-white)"
            variant="outlined"
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
    /* border: var(--border); */
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
    color:var(--color-gray);
}
</style>