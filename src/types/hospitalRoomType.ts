
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

// Массив может быть либо пустым, либо с объектами
type ArrayHospitalRoomServer = Array<HospitalRoomServer> | [];
type ArrayHospitalRoomClient = Array<HospitalRoomClient> | [];


export {
    HospitalRoomServer,
    HospitalRoomClient,
    ArrayHospitalRoomServer,
    ArrayHospitalRoomClient
}