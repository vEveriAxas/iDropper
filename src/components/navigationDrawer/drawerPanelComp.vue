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
            
            <!-- СТАТИСТИКА -->
            <v-list-item 
            prepend-icon="mdi-poll" 
            title="Статистика"
            base-color="var(--color-drawer)"
            @click="router.push({name: 'statistics'})"
            value="statistics">
                <template v-slot:append>
                    <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                </template>
            </v-list-item>

            <!-- НАСТРОЙКИ -->
            <v-list-item 
            id="item-drawer-settings"
            prepend-icon="mdi-cog" 
            title="Настройки"
            base-color="var(--color-drawer)"
            @click="router.push({name: 'hospitals'})"
            value="hospitals">
                <template v-slot:append>
                    <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                </template>
            </v-list-item>

            <!-- БОЛЬНИЦЫ -->
            <v-list-item 
            prepend-icon="mdi-hospital-building" 
            title="Больницы"
            base-color="var(--color-drawer)"
            @click="router.push({name: 'hospitals'})"
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
            @click="router.push({name: 'departments'})"
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
            @click="router.push({name: 'hospitalRooms'})"
            value="hospitalRooms">
                <template v-slot:append>
                    <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                </template>
            </v-list-item>

            <!-- КОЙКИ -->
            <v-list-item 
            prepend-icon="mdi-bed-outline" 
            title="Койки"
            base-color="var(--color-drawer)"
            @click="router.push({name: 'hospitalBeds'})"
            value="hospitalBeds">
                <template v-slot:append>
                    <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template> 

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

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
    height: 94% !important;
    background-color: var(--bg-color-op-blue);
    backdrop-filter: blur(8px);
    margin-top: auto;
    border-right: var(--border-thin);
    z-index: 30 !important;
}
</style>