import axios from 'axios';
const env = import.meta.env

const service = axios.create({
    baseURL: env.VITE_BASE_URL,
    timeout: 60000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
})

service.interceptors.request.use((reqConfig: any) => {
    return reqConfig;
}, (error) => {
    console.log(error)
    return Promise.reject(error)
});

service.interceptors.response.use((response: any) => {
    return response.data;
}, (error) => {
    console.log(error)
    return Promise.reject(error)
});

export default service;
