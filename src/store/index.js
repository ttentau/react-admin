import {createStore} from 'redux'
import Storage from '../utils/storage'

let initState = {
    userInfo: {account: ''},
    userId: '123',
    token: Storage.get('token') === '' ? null : Storage.get('token'),
    routes: [],
}

function todoApp(state = initState, action) {
    switch (action.type) {
        case 'login':
            console.log(action.payload)
            Storage.set('token', action.payload.token)
            return {
                ...state, ...{
                    token: action.payload.token,
                    userInfo: action.payload.userInfo,
                    routes: action.payload.userInfo.routes
                }
            }
        case 'logout':
            Storage.remove('token')
            return {...state, ...{token: null, userInfo: {}}}
        case 'test':
            return {...state, ...{routes: action.payload}}
        default:
            return state
    }
}

let store = createStore(todoApp)

export default store
