import axios from 'axios';

const service = axios.create({
    baseURL: "http://127.0.0.1:8100",//请求地址前缀
    timeout: 0
});

// // 请求拦截器
// service.interceptors.request.use(
//     config => {
//         //添加请求头部参数
//         config.headers['arg1'] = "arg1Value";
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

// // 响应拦截器
// service.interceptors.response.use(
//     response => {
//         //拦截到成功的数据
//         return response.data;
//     },
//     error => {
//         //拦截到失败的数据
//         return Promise.reject(error);
//     }
// );

//添加请求拦截器，在请求头中加token
service.interceptors.request.use(config => {
    if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
});

export default service;

