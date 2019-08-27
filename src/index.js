import React from 'react'
import ReactDOM from 'react-dom'
import './assets/less/index.less'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

import App from './App'
import Login from "./views/pages/Login"


ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/">
                <Redirect to='/app/article'/>
            </Route>
            <Route path="/app" component={App}/>
            <Route path="/Login" component={Login}/>
        </Switch>
    </Router>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

//热更新
if (module.hot) {
    module.hot.accept()
}
