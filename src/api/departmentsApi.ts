// Взаимодействие с ОТДЕЛЕНИЯМИ
import { ArrayDepartmentClient, ArrayDepartmentServer } from '@/types/departmentType';
import { convertKeysToCamelCase } from '../utils/index';
import departments from '../testData/departmentsData.js';

// Получение ОТДЕЛЕНИЙ с сервера
async function getAllDepartmentsDB(): Promise<ArrayDepartmentClient> {
    try {
        // Получение данных с сервера
        const promise: Promise<ArrayDepartmentServer> = new Promise((resovle) => {
            setTimeout(() => {
                resovle(departments);
            }, 500);
        });
        const response = await promise;
        // Форматировение ключей объекта с snake_case в CamelCase
        return convertKeysToCamelCase(response);
    } catch (err) {
        throw new Error(`api/departmentsApi: getAllDepartmentsDB  => ${err}`);
    }
}

export {
    getAllDepartmentsDB,
}