

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
    chiefID: number | string;
}

export {
    HospitalServer,
    HospitalClient,
}