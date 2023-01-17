import Axios from 'axios'
import Cookies from 'js-cookie';

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Access-Control-Allow-Origin': '*',
        'origin' : 'http://127.0.0.1:3000',
    },
    withCredentials: true,
})

/*
const onRequest = (config) => {

    if ((
            config.method == 'post' || 
            config.method == 'put' || 
            config.method == 'delete'
        ) &&
        !Cookies.get('XSRF-TOKEN')) {
        return setCSRFToken()
            .then(response => config);
    }
    return config;
}

const setCSRFToken = () => {
    return axios.get('/csrf-cookie'); 
}

axios.interceptors.request.use(onRequest, null);
*/
export default axios
