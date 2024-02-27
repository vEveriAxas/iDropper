import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { createPinia } from 'pinia';
// Notifications
import notifications from './components/notifications/index';

// Vuetify
import vuetify from './plugins/vuetify';

const pinia = createPinia();
const app = createApp(App);

notifications.forEach((note) => {
    app.component(note.compName, note);
});

app
    .use(pinia)
    .use(vuetify)
    .use(router)
    .mount('#app')