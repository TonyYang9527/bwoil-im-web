import axios from 'axios';

let Axios = axios.create({
    baseURL: "http://www.sit1.bwoilmarine.com/gateway_simplewebapp",
    timeout: 2500
});

// Add a request interceptor
Axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

/*** params : url paramtars * *******/
const UserServices = {
    post: (url, param) => Axios({url: url, method: 'post', params: param})
        .then(response => {
            // console.log('response :'+ JSON.stringify(response));
            var token = response.headers['authorization'];
            if (token != null) {
                localStorage.setItem('Authorization', token);
            } else {
                console.log('HttpClient login Failure');
            }
            return response;
        })
        .catch(error => {
            if (error.response) {
                console.log("response error:" + JSON.stringify(error.response));
            } else if (error.request) {
                console.log("request error:" + JSON.stringify(error.request));
            } else {
                console.log('Other Error', error.message);
            }
        }) ,

        getAuth: (username ,pass) => {
            UserServices.post("/secure/login",{ username: username, password: pass});
            console.log("login Authorization:" +localStorage.getItem('Authorization')) ; 
           return JSON.stringify({auth: localStorage.getItem('Authorization') });
        }
};

export default UserServices;

