import { RouteRecordRaw } from 'vue-router';
import MainView from '@/views/MainView.vue';
import hospitalsMainComp from '../components/hospitals/hospitalsMainComp.vue';
import departmentsMainComp from '../components/departments/departmentsMainComp.vue';
import hospitalRoomsMainComp from '../components/hospitalRooms/hospitalRoomsMainComp.vue';
import hospitalBedsMainComp from '../components/hospitalBeds/hospitalBedsMainComp.vue';

export default  [
    {
        path: '/main/',
        name:'main',
        component: MainView,
        children: [
            // БОЛЬНИЦЫ
            {
                path: 'hospitals',
                name: 'hospitals',
                component: hospitalsMainComp,
                meta: {
                    title: 'больницы',
                    listItemTitle: 'Больница',
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