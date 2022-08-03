import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL: ''
});

axiosInstance.interceptors.request.use((request) => {
    return request;
}, (error) =>{
    return Promise.reject(error)
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) =>{
    return Promise.reject(error)
});
