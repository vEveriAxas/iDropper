<template>
    <v-navigation-drawer 
        class="navigation-drawer" 
        :width="props.drawerWidth" 
        expand-on-hover
        rail
        permanent
        >
            <v-list-item
            base-color="var(--color-default)"
            style="cursor: pointer; padding-top: 1rem;"
            prepend-icon="mdi-menu">
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

            <!-- НАСТРОЙКИ (Группа элементов) -->
            <v-list-group>
                <template v-slot:activator="{ props }">
                    <div v-bind="props">
                    <v-list-item
                        base-color="var(--color-drawer)"
                        prepend-icon="mdi-cog" 
                        title="Настройки"
                    ></v-list-item>
                    </div>
                </template>
                
                <!-- БОЛЬНИЦЫ -->
                <v-list-item 
                prepend-icon="mdi-hospital-building" 
                title="Больницы"
                base-color="var(--color-drawer)"
                @click="router.push({name: 'hospitals'})">
                    <template v-slot:append>
                        <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                    </template>
                </v-list-item>

                <!-- ОТДЕЛЕНИЯ -->
                <v-list-item 
                prepend-icon="mdi-table" 
                title="Отделения"
                base-color="var(--color-drawer)"
                @click="router.push({name: 'departments'})">
                    <template v-slot:append>
                        <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                    </template>
                </v-list-item>

                <!-- ПАЛАТЫ -->
                <v-list-item 
                prepend-icon="mdi-table-large" 
                title="Палаты"
                base-color="var(--color-drawer)"
                @click="router.push({name: 'hospitalRooms'})">
                    <template v-slot:append>
                        <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                    </template>
                </v-list-item>

                <!-- КОЙКИ -->
                <v-list-item 
                prepend-icon="mdi-bed-outline" 
                title="Койки"
                base-color="var(--color-drawer)"
                @click="router.push({name: 'hospitalBeds'})">
                    <template v-slot:append>
                        <v-icon variant="text" v-show="false" icon="mdi-chevron-right"></v-icon>
                    </template>
                </v-list-item>
            </v-list-group>

            <!-- СОТРУДНИКИ -->
            <v-list-item 
            prepend-icon="mdi-account-tie" 
            title="Сотрудники"
            base-color="var(--color-drawer)"
            @click="router.push({name: 'employees'})"
            value="employees">
            </v-list-item>

            <!-- ПРОЦЕДУРЫ -->
            <v-list-item 
            prepend-icon="mdi-pill" 
            title="Процедуры"
            base-color="var(--color-drawer)"
            @click="router.push({name: 'main'})"
            value="procedures">
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

const rail = ref(false)

</script>

<style scoped>
.navigation-drawer {
    height: 94% !important;
    background-color: var(--bg-color-op-blue);
    backdrop-filter: blur(80px);
    margin-top: auto;
    border-right: var(--border-thin);
    z-index: 30 !important;
}
</style>