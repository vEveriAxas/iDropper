<template>
    <v-navigation-drawer class="navigation-drawer" :width="400">

        <!-- БОЛЬНИЦЫ -->
        <v-list-item 
        class="navigation-drawer__item" 
        link
        :append-icon="(true) ? 'mdi-chevron-right' : ''"
        :style="(true)? {backgroundColor: 'var(--bg-color-gray)'} : {}"
        >
            <p class="item--title">Больницы</p>
        </v-list-item>

        <!-- ОТДЕЛЕНИЯ -->
        <v-list-item 
        class="navigation-drawer__item" 
        link
       :append-icon="(false) ? 'mdi-chevron-right' : ''"
        >
            <p class="item--title">Отделения</p>
        </v-list-item>

        <!-- ПАЛАТЫ -->
        <v-list-item 
        class="navigation-drawer__item" 
        link
       :append-icon="(false) ? 'mdi-chevron-right' : ''"
        >
            <p class="item--title">Палаты</p>
        </v-list-item>

        <!-- КОЙКИ -->
        <v-list-item 
        class="navigation-drawer__item" 
        link
        :append-icon="(false) ? 'mdi-chevron-right' : ''"
        >
            <p class="item--title">Койки</p>
        </v-list-item>
    </v-navigation-drawer>
</template> 

<script setup lang="ts">


</script>

<style scoped>
.navigation-drawer {
    height: 93% !important;
    background-color: var(--bg-color-op-blue);
    margin-top: auto;
    border-right: var(--border-thin);
}
.navigation-drawer__item {
    position: relative;
    margin-top: 1.875rem;
    border-top: var(--border-thin);
    border-bottom: var(--border-thin);
    background-color: var(--bg-color-white);
    color: var(--color-default);
}
.navigation-drawer__item + .navigation-drawer__item {
    margin-top: 0;
    border-top: none;
    border-bottom: var(--border-thin);
}
.item--title {
    margin-left: 10px;
}

</style>