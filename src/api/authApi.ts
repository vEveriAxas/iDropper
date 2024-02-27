import { hostname } from './indexApi';
import axios from 'axios';

async function loginEmailPassword(email: string, password: string) {
    try {
        const response = await axios.post(hostname + 'api/sign-in/email-password', {
            email,
            password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response);
        const {data: { data: { token, user } }} = response;
        console.log(token, user);
        
    } catch (err) {
        throw new Error(`api/authApi: loginEmailPassword  => ${err}`);
    }
}
console.log('Hello from authAPI');


export {
    loginEmailPassword,
}
