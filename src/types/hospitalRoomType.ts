
// Объект данных Палаты пришедшего с сервера
interface HospitalRoomServer {
    id: number | string;
    name: string | null;
    hospital_id: number | null;
    department_id: number | null; 
}

// Объект данных Палаты необходимого для работы на фронтенде
interface HospitalRoomClient {
    id: number | string;
    name: string | null;
    hospitalID: number | null;
    departmentID: number | null; 
}

export {
    HospitalRoomServer,
    HospitalRoomClient,
}