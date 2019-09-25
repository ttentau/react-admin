import React from 'react'
import ReactDOM from 'react-dom'
import './assets/less/index.less'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {routeConfig} from './route'
import Redirect from "react-router-dom/Redirect"
import {Provider} from "react-redux"
import store from "./store"

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} children={route.children} path={route.path}/>
            )}
        />
    );
}

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <Switch>
                    {routeConfig.map((v, i) => (
                        <RouteWithSubRoutes key={i} {...v} />
                    ))}
                    <Route exact path="/" render={() => <Redirect to="/article/index"/>}/>
                    <Route render={() => <Redirect to="/404"/>}/>
                </Switch>
            </Router>
        </Provider>
    ),
    document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

//热更新
if (module.hot) {
    module.hot.accept()
}
