import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import api from './api'
import utils from './utils/utils'
import constant from "./utils/constant"
import App from "./App"
import {Provider} from "react-redux"
import store from "./store"
import './mock'
// 导入 mock 数据处理

console.json = function (v) {
    console.log(JSON.stringify(v,null,4))
}
window.$api = api
window.$util = utils
window.$constant = constant

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

//热更新
if (module.hot) {
    module.hot.accept()
}
