<template>
    <div class="filter-panel__container">
        <div class="filter-panel__input-block">
            <!-- Поле поиска -->
            <v-text-field
            class="input-block__search-input"
            bg-color="var(--bg-color-white)"
            color="var(--color-default)"
            rounded="lg"
            density="comfortable"
            variant="solo"
            hide-details
            label="Поиск"
            ></v-text-field>

            <!-- Кнопка Выполнить поиск -->
            <v-btn
            class="input-block__search-btn"
            icon="mdi-magnify"
            density="comfortable"
            color="var(--bg-color-default)"
            rounded="lg"
            ></v-btn>
        </div>
        <div class="filter-panel__sorted-block"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.filter-panel__container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 10%;
    background-color: var(--bg-color-op-blue);
    border-radius: 20px;
    padding: 1rem 1.2rem;
    box-shadow: var(--shadow);
    overflow: hidden;
}
.filter-panel__input-block {
    display: flex;
    align-items: center;
    width: 40%;
    padding: 5px;
}
.input-block__search-input {

}
.input-block__search-btn {
    width: 40px !important;
    height: 40px !important;
    margin-left: 10px;
    color: var(--color-white);
}
.filter-panel__sorted-block {
    width: 60%;
    padding: 5px;
}
</style>