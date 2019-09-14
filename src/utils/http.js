import axios from 'axios'
import Config from './config'
import CONSTANT from './constant'

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? Config.PRODUCT_API_URL : Config.API_URL,
    timeout: 15000,
})

// request 拦截器
instance.interceptors.request.use(
    (config) => {
        config.headers['access-token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0dGVudGF1IiwiYXVkIjoiYWxsIiwiaWF0IjoxNTY4NDgwNjYzLCJuYmYiOjE1Njg0ODA2NjMsImV4cCI6MTU2OTc3NjY2MywiaWQiOiI2NDcyMDlmYi0wNDE3LTRlY2YtODkwZS1lZWM5NTNlMzc2MjAifQ.HCGQVJWb7Bzf0B6zhutkuBZQALopB0WfgygvATo3Qig'
        return config
    },
    error => Promise.reject(error),
)

// respone 拦截器
instance.interceptors.response.use(
    // 响应正常的处理
    (response) => {
        const { data } = response
        if (data === null) {
            return Promise.resolve({
                code: '009900',
                msg: '系统出现错误',
                data: {},
            })
        }
        return Promise.resolve(data)
    },
    // 请求出错的处理
    (error) => {
        console.log(error)
        if (error.response === undefined && error.status === undefined) {
            return Promise.resolve({
                code: '009900',
                msg: '服务器响应超时',
                data: null,
            })
        }
        if (error.response.status >= 500) {
            return Promise.resolve({
                code: '009900',
                msg: '服务器出现错误',
                data: null,
            })
        }
        if (error.response.status === 401) {
            return Promise.resolve({
                code: '009900',
                msg: '用户名或密码不正确',
                data: null,
            })
        }
        const { data } = error.response
        if (data.code !== undefined) {
            return Promise.resolve({
                code: data.code,
                msg: data.msg,
            })
        }
        return Promise.resolve({
            code: '009900',
            msg: data.msg,
            data: null,
        })
    },
)


/**
 * @apiDescription 封装的网络请求方法
 * @apiGroup
 * @apiName request
 * @apiParam  url 地址
 * @apiParam  data 请求数据
 * @apiParam  params 请求参数
 * @apiParam  method 方法类型：get或者post
 * @apiParam  version 接口版本号
 * @apiParamExample
 *       request('Appointment/appointmentList', data, params, CONSTANT.GET)
 * @apiReturn Promise
 */
async function request(url, data = {}, params = {}, method = CONSTANT.POST, version = Config.API_VERSION) {
    return instance({
        url: version + url,
        method,
        data,
        params,
    })
}

export default request
