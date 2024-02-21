// Взаимодействие с ПАЛАТАМИ
import { ArrayHospitalRoomClient, ArrayHospitalRoomServer } from '@/types/hospitalRoomType';
import { convertKeysToCamelCase } from '../utils/index';
import hospitalRooms from '../testData/hospitalRoomData.js';

// Получение ПАЛАТ с сервера
async function getAllHospitalRoomsDB(): Promise<ArrayHospitalRoomClient> {
    try {
        // Получение данных с сервера
        const promise: Promise<ArrayHospitalRoomServer> = new Promise((resovle, reject) => {
            setTimeout(() => {
                resovle(hospitalRooms);
            }, 500);
        });
        const response = await promise;
        // Форматировение ключей объекта с snake_case в CamelCase
        return convertKeysToCamelCase(response);
    } catch (err) {
        throw new Error(`api/hospitalRoomsApi: getAllHospitalRoomsDB  => ${err}`)
    }
}

export {
    getAllHospitalRoomsDB,
}