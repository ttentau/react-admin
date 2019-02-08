import React from 'react'
import ReactDOM from 'react-dom'
import './assets/less/index.less'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter , Switch, Route } from 'react-router-dom';


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App}></Route>
        </Switch>
    </BrowserRouter>
), document.body)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

//热更新
if (module.hot) {
    module.hot.accept()
}
