

// Объект данных Отделения(Больницы) пришедшего с сервера
interface DepartmentServer {
    id: number | string;
    name: string | null;
    hospital_id: number | null;
}

// Объект данных Отделения(Больницы) необходимого для работы на фронтенде
interface DepartmentClient {
    id: number | string;
    name: string | null;
    hospitalID: number | null;
}

export {
    DepartmentServer,
    DepartmentClient,
}