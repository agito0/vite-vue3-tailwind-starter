import request from './request';


export const apiLogin = (data: any) => request({
    url: '/api/user/login',
    method: 'post',
    data
})


