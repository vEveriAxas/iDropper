
// Объект данных пациента пришедшего с сервера
interface PatientServer {
    id: number | string;
    full_name: string | null;
    disease: string | null;
    started: string | null;
    ended: string | null;
    hospital_id: number | null;
    department_id: number | null;
    hospital_room_id: number | null;
    hospital_bed_id: number | null;
}

// Объект данных пациента необходимого для работы на фронтенде
interface PatientClient {
    id: number | string;
    fullName: string | null;
    disease: string | null;
    started: string | null;
    ended: string | null;
    hospitalID: number | null;
    departmentID: number | null;
    hospitalRoomID: number | null;
    hospitalBedID: number | null;
}

export {
    PatientServer,
    PatientClient,
}