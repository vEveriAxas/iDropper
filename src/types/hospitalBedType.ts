
// Объект данных Койки(Больницы) пришедшего с сервера
interface HospitalBedServer {
    id: number | string;
    name: string | null;
    hospital_id: number | null;
    department_id: number | null;
    hospital_room_id: number | null;
    patient_id: number | null;
}

// Объект данных Койки(Больницы) необходимого для работы на фронтенде
interface HospitalBedClient {
    id: number | string;
    name: string | null;
    hospitalID: number | null;
    departmentID: number | null;
    hospital_roomID: number | null;
    patientID: number | null;
}

// Массив может быть либо пустым, либо с объектами
type ArrayHospitalBedServer = Array<HospitalBedServer> | [];
type ArrayHospitalBedClient = Array<HospitalBedClient> | [];


export {
    HospitalBedServer,
    HospitalBedClient,
    ArrayHospitalBedServer,
    ArrayHospitalBedClient
}