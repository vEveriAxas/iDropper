import { RouteRecordRaw } from 'vue-router';
import AuthView from '@/views/AuthView.vue';

export default  [
    {
        path: '/auth',
        name:'auth',
        component: AuthView,
    },
] as Array<RouteRecordRaw>