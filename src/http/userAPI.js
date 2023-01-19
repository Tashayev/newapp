// Проверка токена на валидность(функция чек)

import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) =>{
    const {data} = await $host.post('api/user/registration', {email, password, role:'ADMIN'})
    localStorage.setItem('token', data.token)// Сохраняем токен после регистрации
    return jwt_decode(data.token)//Чтобы распарсит наш токен
}

export const login = async (email, password) =>{
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)//50п.
    return jwt_decode(data.token)
}

export const check = async () =>{
    // authHost - используем для прикрепления токена
    return await $authHost.get('api/user/registration',)
}
//Логика такая человек регаеться, сохраняет токен, при последовательных входах будет проверяться с помощью функций чек.
// Если логин не верен, то соответственно разлагиневаеться. Если же логин верный, то необходима сохранить токен,
// для этого переходим App.js