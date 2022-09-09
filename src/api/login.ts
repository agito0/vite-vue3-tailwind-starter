import request from './request';


export const apiLogin = (data: any) => request({
    url: '/api/login',
    method: 'post',
    data
})


