import React, {Component} from 'react'
import './App.less'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {routeConfig} from "./route"
import Redirect from "react-router-dom/Redirect"
import AuthorizedRoute from "./views/pages/AuthorizedRoute"
import Login from "./views/pages/Login"


export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    {routeConfig.map((route, idx) => {
                        return route.component ? (
                            <AuthorizedRoute key={idx} {...route}/>
                        ) : (null);
                    })}
                    <Route exact path="/" render={() => <Redirect to="/article/index"/>}/>
                    <Route render={() => <Redirect to="/404"/>}/>
                </Switch>
            </Router>
        )
    }
}
