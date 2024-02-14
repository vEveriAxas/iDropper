// Импорт и настройка vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Импорт иконок
import * as icons from '@mdi/js';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases: {
            // Регистрация псевдонимов
            ...aliases,
            account: icons.mdiAccount,
        },
        sets: {
            mdi,
        },
    },
});

export default vuetify;