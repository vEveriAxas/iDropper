import { RouteRecordRaw } from 'vue-router';
import MainView from '../views/MainView.vue';
import hospitalsMainComp from '../components/hospitals/hospitalsMainComp.vue';
import departmentsMainComp from '../components/departments/departmentsMainComp.vue';
import hospitalRoomsMainComp from '../components/hospitalRooms/hospitalRoomsMainComp.vue';
import hospitalBedsMainComp from '../components/hospitalBeds/hospitalBedsMainComp.vue';
import statisticsComp from '../components/statistics/statisticsComp.vue';

export default  [
    {
        path: '/main/',
        name:'main',
        component: MainView,
        redirect: {name: 'statistics'},
        children: [
            // СТАТИСТИКА
            {
                path: 'statistics',
                name: 'statistics',
                component: statisticsComp,
                meta: {
                    requireAuth: true,
                }
            },
            // БОЛЬНИЦЫ
            {
                path: 'hospitals',
                name: 'hospitals',
                component: hospitalsMainComp,
                meta: {
                    title: 'больницы',
                    listItemTitle: 'Больница',
                    requireAuth: true,
                }
            },
            // ОТДЕЛЕНИЯ
            {
                path: 'departments',
                name: 'departments',
                component: departmentsMainComp,
                meta: {
                    requireAuth: true,
                }
            },
            // ПАЛАТЫ
            {
                path: 'hospital-rooms',
                name: 'hospitalRooms',
                component: hospitalRoomsMainComp,
                meta: {
                    requireAuth: true,
                }
            },
            // КОЙКИ
            {
                path: 'hospital-beds',
                name: 'hospitalBeds',
                component: hospitalBedsMainComp,
                meta: {
                    requireAuth: true,
                }
            },
        ],
    },
] as Array<RouteRecordRaw>