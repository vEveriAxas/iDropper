// Взаимодействие с ОТДЕЛЕНИЯМИ
import { ArrayUserClient, ArrayUserServer } from '@/types/userType';
import { convertKeysToCamelCase } from '../utils/index';
import users from '../testData/usersData.js';

// Получение СОТРУДНИКОВ с сервера
async function getAllDUsersDB(): Promise<ArrayUserClient> {
    try {
        // Получение данных с сервера
        const promise: Promise<ArrayUserServer> = new Promise((resovle) => {
            setTimeout(() => {
                resovle(users);
            }, 500);
        });
        const response = await promise;
        // Форматировение ключей объекта с snake_case в CamelCase
        return convertKeysToCamelCase(response);
    } catch (err) {
        throw new Error(`api/userApi: getAllDUsersDB  => ${err}`);
    }
}

export {
    getAllDUsersDB,
}