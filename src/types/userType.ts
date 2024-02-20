
// Объект данных пациента пришедшего с сервера
interface UserServer {
    id: number | string;
    full_name: string | null;
    tel: string | null; 
    is_active: boolean | null;
    is_superuser: boolean | false;
    last_activity: string | null;
}

// Объект данных пациента необходимого для работы на фронтенде
interface UserClient {
    id: number | string;
    fullName: string | null;
    tel: string | null; 
    isActive: boolean | null;
    isSuperuser: boolean | null;
    lastActivity: string | null;
}

export {
    UserServer,
    UserClient,
}