import CONSTANT from '../utils/constant'
import request from '../utils/http'

export default {
    select(data,params){
        return request('category/select', data, params, CONSTANT.GET)
    },
    create(data,params){
        return request('category/create', data, params, CONSTANT.POST)
    },
    edit(data,params){
        return request('category/edit', data, params, CONSTANT.POST)
    },
    detail(data,params){
        return request('category/detail', data, params, CONSTANT.GET)
    },
    del(data,params){
        return request('category/del', data, params, CONSTANT.GET)
    },
    delMore(data,params){
        return request('category/delMore', data, params, CONSTANT.POST)
    },
}
