import { RouteRecordRaw } from 'vue-router';
import MainView from '@/views/MainView.vue';
import itemsListComp from '../components/itemsList/itemsListComp.vue';

export default  [
    {
        path: '/main/:userHashID?/',
        name:'main',
        component: MainView,
        children: [
            // БОЛЬНИЦЫ
            {
                path: 'hospitals',
                name: 'hospitals',
                component: itemsListComp,
                meta: {
                    title: 'больницы',
                }
            },
            // ОТДЕЛЕНИЯ
            {
                path: 'departments',
                name: 'departments',
                component: itemsListComp,
                meta: {
                    title: 'отделения',
                }
            },
            // ПАЛАТЫ
            {
                path: 'chambers',
                name: 'chambers',
                component: itemsListComp,
                meta: {
                    title: 'палаты',
                }
            },
            // КОЙКИ
            {
                path: 'beds',
                name: 'beds',
                component: itemsListComp,
                meta: {
                    title: 'койки',
                }
            },
        ],
    },
] as Array<RouteRecordRaw>