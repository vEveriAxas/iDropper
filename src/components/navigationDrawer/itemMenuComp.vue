<template>
    <div class="text-center">
        <v-menu v-model="menu" :close-on-content-click="false" location="end">
            <template v-slot:activator="{ props }">
                <v-btn color="indigo" v-bind="props">
                    Menu as Popover
                </v-btn>
            </template>

            <!--  -->
            <v-card min-width="300">

            </v-card>
        </v-menu>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const menu = ref(false)
</script>