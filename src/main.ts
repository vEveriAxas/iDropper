import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { createPinia } from 'pinia';

// Vuetify
import vuetify from './plugins/vuetify';


const pinia = createPinia();
const app = createApp(App);
app
    .use(pinia)
    .use(vuetify)
    .use(router)
    .mount('#app')