

// Объект данных Больницы пришедшего с сервера
interface HospitalServer {
    id: number | string;
    name: string | null;
    address: string | null; 
    chief_id: number | string;
}

// Объект данных Больницы необходимого для работы на фронтенде
interface HospitalClient {
    id: number | string;
    name: string | null;
    address: string | null; 
    chiefId: number | string;
}

// Массив может быть либо пустым, либо с объектами
type ArrayHospitalServer = Array<HospitalServer> | [];
type ArrayHospitalClient = Array<HospitalClient> | [];

export {
    HospitalServer,
    HospitalClient,
    ArrayHospitalServer,
    ArrayHospitalClient,
}