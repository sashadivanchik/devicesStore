import axios from 'axios';

// запросы не требующие авторизации
const $host = axios.create({
    baseURL: import.meta.env.VITE_APP_URL
});


// запросы требующие авторизации
const $authHost = axios.create({
    baseURL: import.meta.env.VITE_APP_URL
});

// @ts-ignore
const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
};

// будет подставляться токен в headers.authorization при каждом запросе
$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}
