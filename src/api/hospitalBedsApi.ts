// Взаимодействие с КОЙКАМИ
import { ArrayHospitalBedClient, ArrayHospitalBedServer } from '@/types/hospitalBedType';
import { convertKeysToCamelCase } from '../utils/index';
import hospitalBeds from '../testData/hospitalBedsData.js';

// Получение массива КОЕК с сервера
async function getAllHospitalBedsDB(): Promise<ArrayHospitalBedClient> {
    try {
        // Получение данных с сервера
        const promise: Promise<ArrayHospitalBedServer> = new Promise((resovle, reject) => {
            setTimeout(() => {
                resovle(hospitalBeds);
            }, 500);
        });
        const response = await promise;
        // Форматировение ключей объекта с snake_case в CamelCase
        return convertKeysToCamelCase(response);
    } catch (err) {
        throw new Error(`api/hospitalBedsApi: getAllHospitalBedsDB  => ${err}`)
    }
}

export {
    getAllHospitalBedsDB,
}