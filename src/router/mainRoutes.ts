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
                    listItemTitle: 'Больница',
                }
            },
            // ОТДЕЛЕНИЯ
            {
                path: 'departments',
                name: 'departments',
                component: itemsListComp,
                meta: {
                    title: 'отделения',
                    listItemTitle: 'Отделение',
                }
            },
            // ПАЛАТЫ
            {
                path: 'chambers',
                name: 'chambers',
                component: itemsListComp,
                meta: {
                    title: 'палаты',
                    listItemTitle: 'Палата',
                }
            },
            // КОЙКИ
            {
                path: 'beds',
                name: 'beds',
                component: itemsListComp,
                meta: {
                    title: 'койки',
                    listItemTitle: 'Койка',
                }
            },
        ],
    },
] as Array<RouteRecordRaw>