<template>
    <v-navigation-drawer class="navigation-drawer" :width="props.drawerWidth" v-model="drawer" :rail="rail" permanent
        @click="rail = false">
        <v-list-item
        base-color="var(--color-default)"
        style="cursor: pointer;"
        prepend-icon="mdi-menu">
            <template v-slot:append>
                <v-btn 
                variant="text" 
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
                ></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <!-- БОЛЬНИЦЫ -->
            <v-list-item 
            prepend-icon="mdi-hospital-building" 
            title="Больницы"
            base-color="var(--color-drawer)"

            value="hospitals">
                <template v-slot:append>
                    <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                </template>
            </v-list-item>

            <!-- ОТДЕЛЕНИЯ -->
            <v-list-item 
            prepend-icon="mdi-table" 
            title="Отделения"
            base-color="var(--color-drawer)"
            value="departments">
                <template v-slot:append>
                    <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                </template>
            </v-list-item>

            <!-- ПАЛАТЫ -->
            <v-list-item 
            prepend-icon="mdi-table-large" 
            title="Палаты"
            base-color="var(--color-drawer)"
            value="chambers">
                <template v-slot:append>
                    <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                </template>
            </v-list-item>

            <!-- КОЙКИ -->
            <v-list-item 
            prepend-icon="mdi-bed-outline" 
            title="Койки"
            base-color="var(--color-drawer)"

            value="beds">
                <template v-slot:append>
                    <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template> 

<script setup lang="ts">
import { ref, defineProps } from 'vue';

// ============================  PROPS  ================================
const props = defineProps<{
    drawerWidth: number,
}>();

// ============================  DATA  ================================

const drawer = ref(true)
const rail = ref(true)

</script>

<style scoped>
.navigation-drawer {
    height: 93% !important;
    background-color: var(--bg-color-op-blue);
    backdrop-filter: blur(8px);
    margin-top: auto;
    border-right: var(--border-thin);
}
</style>