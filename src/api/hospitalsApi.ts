// Взаимодействие с Больницами
import { ArrayHospitalClient, ArrayHospitalServer } from '@/types/hospitalType';
import { convertKeysToCamelCase } from '../utils/index';
import hospitals from '../testData/hospitalsData.js';

// Получение больниц с сервера
async function getAllHospitalDB(): Promise<ArrayHospitalClient> {
    try {
        // Получение данных с сервера
        const promise: Promise<ArrayHospitalServer> = new Promise((resovle) => {
            setTimeout(() => {
                resovle(hospitals);
            }, 500);
        });
        const response = await promise;
        // Форматировение ключей объекта с snake_case в CamelCase
        return convertKeysToCamelCase(response);
    } catch (err) {
        throw new Error(`api/hospitalsApi: getAllHospitalDB  => ${err}`)
    }
}

export {
    getAllHospitalDB,
}