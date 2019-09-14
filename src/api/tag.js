import CONSTANT from '../utils/constant'
import request from '../utils/http'

export default {
    select(data,params){
        return request('tag/select', data, params, CONSTANT.GET)
    },
    create(data,params){
        return request('tag/create', data, params, CONSTANT.POST)
    },
    edit(data,params){
        return request('tag/edit', data, params, CONSTANT.POST)
    },
    detail(data,params){
        return request('tag/detail', data, params, CONSTANT.GET)
    },
    del(data,params){
        return request('tag/del', data, params, CONSTANT.GET)
    },
    delMore(data,params){
        return request('tag/delMore', data, params, CONSTANT.POST)
    },
}
