import Mock from 'mockjs'

const data = Mock.mock({
    'data|3-10': [{
        'id|1': '@id',
        'title|1': '@ctitle',
        'content|1': '@csentence',
        'createTime|1': "@date('T')",
    }],
    'code|1': '000000',
    msg: '',
})
Mock.mock(/user\/notReadMessages/, data)

const data1 = Mock.mock({
    'data|0': [{
        'id|1': '@id',
        'title|1': '@ctitle',
        'content|1': '@csentence',
        'createTime|1': "@date('T')",
    }],
    'code|1': '000000',
    msg: '',
})
Mock.mock(/user\/hasReadAllMessage/, data1)

const token = Mock.mock({
    'data|1': 'xxxxx',
    'code|1': '000000',
    msg: '',
})
Mock.mock(/user\/login/, token)

const userInfo = Mock.mock({
    'data': {
        'id|1': '@id',
        'account|1': '@ctitle',
        'username|1': '@ctitle',
        'avatar|1': 'https://i.loli.net/2018/08/18/5b7819891bab1.jpg',
        'title|1': '@ctitle',
        'content|1': '@csentence',
        'createTime|1': "@date('T')",
    },
    'code': '000000',
    msg: '',
})
Mock.mock(/user\/userInfo/, userInfo)
