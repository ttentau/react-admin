import {createStore} from 'redux'
// import todoApp from './reducers'

let initState = {
    userInfo: {text: 111, name: 'TTTT'},
    userId: '123',
    token: ''
}

function todoApp(state = initState, action) {
    switch (action.type) {
        case 'test':
            return {...state, ...{userInfo: {name: action.payload}}}
        default:
            return state
    }
}

let store = createStore(todoApp)

export default store