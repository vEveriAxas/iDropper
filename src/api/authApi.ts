import { hostname } from './indexApi';
import axios from 'axios';
import useMainStore from '../store/mainStore';

async function loginEmailPassword(email: string, password: string) {
    const store = useMainStore();
    try {
        const response = await axios.post(hostname + 'api/sign-in/email-password', {
            email,
            password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const { data: { data: { token, user } } } = response;
        // Фиксируем полученные данные в localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', store.encryptObject(user, token));
        // Выводим уведомление об успехе
        store.activeSuccessOperation(800);
    } catch (err) {
        throw new Error(`api/authApi: loginEmailPassword  => ${err}`);
    }
}

export {
    loginEmailPassword,
}


