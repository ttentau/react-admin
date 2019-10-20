import CONSTANT from '../utils/constant'
import request from '../utils/http'

export default {
    userInfo(data, params) {
        return request('user/userInfo', data, params, CONSTANT.GET)
    },

    login(data, params){
        return request('user/login', data, params, CONSTANT.POST)
    },

    // 消息
    // 获取所有用户未读信息
    notReadMessages(data, params) {
        return request('user/notReadMessages', data, params, CONSTANT.GET)
    },
    // 获取所有用户信息
    allMessages(data, params) {
        return request('user/allMessages', data, params, CONSTANT.GET)
    },
    // 设置为已读信息
    hasReadMessage(data, params) {
        return request('user/hasReadMessage', data, params, CONSTANT.GET)
    },
    // 设置为已读信息
    hasReadAllMessage(data, params) {
        return request('user/hasReadAllMessage', data, params, CONSTANT.GET)
    },
}
