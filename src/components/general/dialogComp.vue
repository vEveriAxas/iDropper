<template>
    <v-dialog v-model="modelValue" width="auto">
        <v-card class="dialog__wrapper">
            <form class="dialog__form">
                <div class="dialog__form--top">
                    <h1 class="top-title">{{ (fullName)? fullName : `Пользователь ${id}` }}</h1>
                </div>

                <!-- Общие данные -->
                <div class="dialog__form--general-data">
                    <v-card-title class="data-title">Общие данные</v-card-title>
                    <!-- Имя -->
                    <v-card-subtitle>Имя</v-card-subtitle>
                    <v-text-field
                    class="general-data__input"
                    bg-color="var(--bg-color-white)"
                    v-model="firstname"
                    color="var(--color-default)"
                    rounded="xs"
                    :density="'compact'"
                    variant="solo"
                    hide-details
                    ></v-text-field>

                    <!-- Фамилия -->
                    <v-card-subtitle>Фамилия</v-card-subtitle>
                    <v-text-field
                    class="general-data__input"
                    bg-color="var(--bg-color-white)"
                    v-model="lastname"
                    color="var(--color-default)"
                    rounded="xs"
                    :density="'compact'"
                    variant="solo"
                    hide-details
                    ></v-text-field>

                    <!-- Отчество -->
                    <v-card-subtitle>Отчество</v-card-subtitle>
                    <v-text-field
                    class="general-data__input"
                    bg-color="var(--bg-color-white)"
                    v-model="surname"
                    color="var(--color-default)"
                    rounded="xs"
                    :density="'compact'"
                    variant="solo"
                    hide-details
                    ></v-text-field>
                </div>

                <v-divider></v-divider>

                <!-- Учетные данные -->
                <div class="dialog__form--credentials-data">
                    <v-card-title class="data-title">Учетные данные</v-card-title>
                    <!-- Email -->
                    <v-card-subtitle>E-mail</v-card-subtitle>
                    <v-text-field
                    class="general-data__input"
                    bg-color="var(--bg-color-white)"
                    v-model="email"
                    color="var(--color-default)"
                    rounded="xs"
                    :density="'compact'"
                    variant="solo"
                    hide-details
                    ></v-text-field>

                    <!-- Телефон -->
                    <v-card-subtitle>Телефон</v-card-subtitle>
                    <v-text-field
                    class="general-data__input"
                    bg-color="var(--bg-color-white)"
                    v-model="tel"
                    color="var(--color-default)"
                    rounded="xs"
                    :density="'compact'"
                    variant="solo"
                    hide-details
                    ></v-text-field>

                    <!-- Роль -->
                    <v-card-subtitle>Роль</v-card-subtitle>
                    <v-select
                    class="general-data__input"
                    bg-color="var(--bg-color-white)"
                    v-model="role"
                    color="var(--color-default)"
                    rounded="xs"
                    :items="['Сотрудник', 'Управляющий', 'Администратор']"
                    :density="'compact'"
                    variant="solo"
                    hide-details
                    >
                        <template v-slot:selection="{item}">
                            <p style="font-size: 13px;">{{ (role.length)? role : item.value }}</p>
                        </template>
                    </v-select>

                    <!-- Сменить пароль -->
                    <v-card-subtitle>Сменить пароль</v-card-subtitle>
                    <v-text-field
                    class="general-data__input"
                    bg-color="var(--bg-color-white)"
                    v-model="repassword"
                    color="var(--color-default)"
                    rounded="xs"
                    :density="'compact'"
                    variant="solo"
                    hide-details
                    ></v-text-field>

                    <!-- Статус -->
                    <v-card-subtitle>Статус</v-card-subtitle>
                    <v-chip 
                    class="mb-1"
                    :color="`${(status === true)? 'var(--bg-color-default)' : 'red'}`">
                        {{ (status === true)? 'Активен' : 'Не активен' }}
                    </v-chip>
                </div>
            </form>
            <div class="dialog__actions">
                <v-btn variant="tonal" color="var(--bg-color-default)" class="mr-6">Сохранить</v-btn>
                <v-btn variant="outlined" color="red" @click="emit('close')">Закрыть</v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { UserClient } from '../../types/userType';
import { ref, defineModel, defineEmits, defineProps, watch } from 'vue';

const props = defineProps<{
    employeeData: UserClient | null | undefined,
}>();

const modelValue = defineModel<boolean>();
const emit = defineEmits<{
    close: [],
}>();

const id = ref<null | string | number>('');
const fullName = ref<string | null>('');
const firstname = ref('');
const lastname = ref('');
const surname = ref('');
const email = ref('');
const tel = ref('');
const role = ref('');
const status = ref(false);
const repassword = ref('');

watch(() => props.employeeData, (newValue) => {
    if(typeof newValue === 'object' && newValue !== null) {
        const words = newValue?.fullName?.split(' ');
        fullName.value = newValue?.fullName;
        if(Array.isArray(words)) {
            if(words.length > 0) {
                firstname.value = words[0];
                lastname.value = words[1];
                surname.value = words[2];
            }
        }
        if(newValue.id) {
            id.value = newValue.id;
        }
        if(newValue.email) {
            email.value = newValue.email;
        }
        if(newValue.isActive) {
            status.value = newValue.isActive;
        }
        if(newValue.tel) {
            tel.value = newValue.tel;
        }
        if(newValue.isSuperuser === false) {
            role.value = 'Сотрудник';
        }
    } 
    
})

</script>

<style scoped>
.dialog__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    height: 80vh;

}
.dialog__form {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.dialog__actions {
    display: flex;
    justify-content: flex-end;
    width: 60%;
    border-top: var(--border);
    padding: 2rem 0;
}
.dialog__form--top {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 1rem 2rem 1rem;
    color: var(--color-default);
    background-color: var(--bg-color-op-blue);
    backdrop-filter: blur(6px);
    z-index: 90;
}
.top-title {
    font-size: 1.4rem;
}
.data-title {
    display: flex;
    justify-content: center;
}
.dialog__form--general-data {
    width: 60%;
    padding: 1rem;
    border-top: var(--border);
}
.general-data__input {
    margin-bottom: 1rem;
}

.dialog__form--credentials-data {
    width: 60%;
    padding: 1rem;
    border-top: var(--border);
}
</style>