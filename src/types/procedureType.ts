
// Объект данных процедуры пришедшего с сервера
interface ProcedureServer {
    id: number | string;
    drug_name: string | null;
    drug_volume: number | string | null;
    patient_id: number | string | null;
    idropper_id: number | string | null;
    hospital_id: number | string | null;
    department_id: number | string | null;
    hospital_room_id: number | string | null;
    hospital_bed_id: number | string | null; 
    expected_duration: number | string | null;
    started: string | null;
    ended: string | null;
    actual_duration: number | string | null;  
}

// Объект данных процедуры необходимого для работы на фронтенде
interface ProcedureClient {
    id: number | string;
    drugName: string | null;
    drugVolume: number | string | null;
    patientID: number | string | null;
    idropperID: number | string | null;
    hospitalID: number | string | null;
    departmentID: number | string | null;
    hospitalRoomID: number | string | null;
    hospitalBedID: number | string | null; 
    expectedDuration: number | string | null;
    started: string | null;
    ended: string | null;
    actualDuration: number | string | null;  
}

export {
    ProcedureServer,
    ProcedureClient,
}