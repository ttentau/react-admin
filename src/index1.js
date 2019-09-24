import React from 'react'
import ReactDOM from 'react-dom'
import './assets/less/index.less'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {routeConfig} from './route'
import Redirect from "react-router-dom/Redirect"
import {Provider} from "react-redux"
import store from "./store"
import {Component} from "react"

// ReactDOM.render((
//     <Router>
//         <Switch>
//             <Route exact path="/">
//                 <Redirect to='/app/article/index'/>
//             </Route>
//             <Route path="/app" component={App}/>
//             <Route path="/Login" component={Login}/>
//         </Switch>
//     </Router>
// ), document.getElementById('root'))
// Route path={v.path} key={i} component={v.component}/>
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.children} />
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
