// Функция применяется для форматирования ключей объектов из формата snake_case в camelCase
function convertKeysToCamelCase(obj) {
    try {
        // Если obj не является объектом, возвращаем исходное значение
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }

        // Если obj является массивом, перебираем его элементы и рекурсивно применяем функцию convertKeysToCamelCase
        if (Array.isArray(obj)) {
            return obj.map((item) => convertKeysToCamelCase(item));
        }

        // Создаем новый объект, чтобы сохранить исходные значения
        const newObj = {};

        // Перебираем ключи (свойства) объекта obj
        for (const key in obj) {
            // Преобразуем ключ из snake_case в camelCase
            const camelCaseKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());

            // Рекурсивно применяем функцию convertKeysToCamelCase к значению свойства
            newObj[camelCaseKey] = convertKeysToCamelCase(obj[key]);
        }
        return newObj;
    } catch (err) {
        throw new Error(`utils/index:convertKeysToCamelCase =>  ${err}`);
    }
}

// Функция для сравнения двух объектов на разность значений их ключей
function compareObjects(obj1: object, obj2: object): boolean {
    try {
        let flag = true;
        for (const key in obj1) {
            if (typeof obj1[key] === 'object' && obj1[key] !== null) {
                continue;
            }
            if (obj1[key] !== obj2[key]) {
                flag = false;
                break;
            }
        }
        return flag;
    } catch (err) {
        throw new Error(`utils/index:compareObjects =>  ${err}`);
    }
}

export {
    convertKeysToCamelCase,
    compareObjects,
}