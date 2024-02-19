import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DefaultView from '@/views/DefaultView.vue';
import NotFound404View from '@/views/NotFound404View.vue';
// Роуты
import mainRoutes from './mainRoutes';
import authRoutes from './authRoutes';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'default',
        component: DefaultView,
    },
    
    ...authRoutes,  // Auth
    ...mainRoutes,  // Main

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
