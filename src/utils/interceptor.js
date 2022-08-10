import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`
});


axiosInstance.interceptors.request.use((request) => {
    // const token = localStorage.getItem('USER_TOKEN');
    // request.headers.Authorization = `Bearer ${token}`;

    return request;
}, (error) => {
    return Promise.reject(error)
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log(error.response.status, 'error=======')
    return Promise.reject(error)
});
