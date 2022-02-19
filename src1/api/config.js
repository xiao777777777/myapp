import axios from 'axios'

// 给所有axios请求设置基础的域名
// axios.defaults.baseURL = 'http://localhost:3000'


//用axios.create可以创建axios的实例，允许不同实例有不同配置
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    // 请求超时的时间
    timeout: 5000
});
// const axios2 = axios.create({
//     baseURL: 'http://www.test.com',
//     timeout: 5000
// });


//添加请求拦截器，会在发起请求之前执行相应的需求
instance.interceptors.request.use(function(config) {
    let token = sessionStorage.getItem("token")
    if (token) {
        config.headers.common['Authorization'] = 'Bearer ' + token;
    }
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// //添加响应拦截器，会在返回数据后先执行相应的需求
instance.interceptors.response.use(function(response) {
    if (response.data.code == 401) {
        localStorage.clear()
        window.history.reload()
    }
    return response;
}, function(error) {
    return Promise.reject(error);
});
export default instance