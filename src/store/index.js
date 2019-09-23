import {createStore} from 'redux'
// import todoApp from './reducers'

let initState = {
    userInfo: {},
    userId: '',
    token: ''
}

function todoApp(state = initState, action) {
    switch (action.type) {
        case 'test':
            return 1
        default:
            return state
    }
}

let store = createStore(todoApp)

export default store