import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL,
  timeout: 60000,
});

// request 拦截器
service.interceptors.request.use(
  (config:any) => {
   
    if (config.timeout == 0) {
      config.timeout = 5000
    }
    // if (Cache.localGet("accessToken")) {
    //   config.headers['Authorization'] ='Bearer '+ Cache.localGet("accessToken"); // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
  
    // if (config.params && config.params.language) {
    //   config.headers['language'] = config.params.language
    // }
    return config;
  },
  (error) => {
    // Handle request error here
    Promise.reject(error);
  },
);

//避免重复报错
let isFlag: boolean = false

// respone 拦截器
service.interceptors.response.use(
  (response) => {    
    const res = response.data;
    if (response.data.code == 101010 || response.data.code == 913 || response.data.code == 914 || response.data.code == 916) { // 收费限制
      return response.data
    }
    if( response?.data?.code && response.data.code != 0 &&  response.data.code != 200){
      // let isErroCode = response.data.errorCode ? true :false
      ElMessage({
        showClose: true,
        message: res.msg || res.message,
        // message: i18n.tc(res.code+''),
        type: 'error',
        duration: 5 * 1000,
      });
     return Promise.reject('error');
    }
   //http状态码为非200
   if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
    // Message({
    //   showClose: true,
    //   message: i18n.tc(res.code),
    //   type: 'error',
    //   duration: 5 * 1000,
    // });

      return Promise.reject('error');
    } else {
      return response.data.data || response.data;
    }
  },
  (error) => {
    console.log(error.response.status ,error)
    if(error.response.status  == 401 ){
    //   isLogin()
    }
    let data = error.response.data

    if (data) {
        ElMessage({
        showClose: true,
        message: data.message || error.message,
        type: 'error',
        duration: 5 * 1000,
      });
      return Promise.reject(error);
    } else {

        ElMessage({
        showClose: true,
        message: data.message || error.message,
        type: 'error',
        duration: 5 * 1000,
      });
      return Promise.reject(error);
    }
  },
);

export default service;
