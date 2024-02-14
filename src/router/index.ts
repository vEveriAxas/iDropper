import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DefaultView from '@/views/DefaultView.vue';
import NotFound404View from '@/views/NotFound404View.vue';
import MainView from '@/views/MainView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'default',
        component: DefaultView,
    },
    // 
    {
        path: '/main/:userHashID?',
        name:'main',
        component: MainView,
    },

    // Not Found 404
    {
        path: '/:notMatched(.*)*',
        name: 'notFound',
        component: NotFound404View,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
