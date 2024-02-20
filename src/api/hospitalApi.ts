// Взаимодействие с Больницами
import { HospitalServer, HospitalClient } from '@/types/hospitalType';
import { convertKeysToCamelCase } from '../utils/index';
import hospitals from '../testData/hospitalsData.js';

// Получение больниц с сервера
async function getAllHospitalDB(): Promise<Array<HospitalClient>> {
    try {
        // Получение данных с сервера
        const promise: Promise<Array<HospitalServer>> = new Promise((resovle, reject) => {
            setTimeout(() => {
                resovle(hospitals);
            }, 500);
        });
        const response = await promise;
        // Форматировение ключей объекта с snake_case в CamelCase
        return convertKeysToCamelCase(response);
    } catch (err) {
        throw new Error(`api/hospitalApi: getAllHospitalDB  => ${err}`)
    }
}

export {
    getAllHospitalDB,
}