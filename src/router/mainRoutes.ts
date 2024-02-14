import { RouteRecordRaw } from 'vue-router';
import MainView from '@/views/MainView.vue';

export default  [
    {
        path: '/main/:userHashID?/',
        name:'main',
        component: MainView,
        children: [

        ],
    },
] as Array<RouteRecordRaw>