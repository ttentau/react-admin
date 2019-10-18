import {createStore} from 'redux'
import Storage from '../utils/storage'

let initState = {
    userInfo: {text: 111, name: 'TTTT1'},
    userId: '123',
    token: Storage.get('token') === '' ? null : Storage.get('token'),
}

function todoApp(state = initState, action) {
    switch (action.type) {
        case 'test':
            return {...state, ...{userInfo: {name: action.payload}}}
        case 'login':
            Storage.set('token', action.payload)
            return {...state, ...{token: action.payload}}
        case 'logout':
            Storage.remove('token')
            return {...state, ...{token: null, userInfo: {}}}
        default:
            return state
    }
}

let store = createStore(todoApp)

export default store
