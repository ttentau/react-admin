import CONSTANT from '../utils/constant'
import request from '../utils/http'

export default {
    select(data,params){
        return request('article/select', data, params, CONSTANT.GET)
    },
    create(data,params){
        return request('article/create', data, params, CONSTANT.POST)
    },
    editDetail(data,params){
        return request('article/editDetail', data, params, CONSTANT.POST)
    },
    previewDetail(data,params){
        return request('article/previewDetail', data, params, CONSTANT.POST)
    },
    edit(data,params){
        return request('article/edit', data, params, CONSTANT.POST)
    },
    tagAndCategoryList(data,params){
        return request('article/tagAndCategoryList', data, params, CONSTANT.GET)
    },
    del(data,params){
        return request('article/del', data, params, CONSTANT.GET)
    },
    delMore(data,params){
        return request('article/delMore', data, params, CONSTANT.POST)
    },
}
