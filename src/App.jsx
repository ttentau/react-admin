import React, {Component} from 'react'
import './App.less'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {constantRouterMap} from "./route"
import Redirect from "react-router-dom/Redirect"
import AuthorizedRoute from "./component/AuthorizedRoute"
import {connect} from "react-redux"
import Page404 from "./views/pages/Page404"
import {asyncRouterMap} from "./route/asyncRouterMap"


class App extends Component {

    render() {
        //动态路由表
        let dynamicRoutes = []
        if (this.props.token) {
            if (!this.props.routes.length) {
                window.$api.user.userInfo(this.props.token).then(
                    resUser => {
                        if (resUser.code === window.$constant.SUCCESS) {
                            window.$util.success('登录成功')
                            resUser.data.routes = asyncRouterMap
                            this.props.setUserInfo({token: this.props.token, userInfo: resUser.data})
                            dynamicRoutes = this.props.routes.map((route) => {
                                return route.component ? (
                                    <AuthorizedRoute key={route.path} {...route}/>
                                ) : (null);
                            })
                            dynamicRoutes.push(<Route exact path="/" render={() => <Redirect to="/article/index"/>}/>)
                        } else {
                            window.$util.error(resUser.msg)
                        }
                    }
                )
            } else {
                dynamicRoutes = this.props.routes.map((route, idx) => {
                    return route.component ? (
                        <AuthorizedRoute key={route.path} {...route}/>
                    ) : (null);
                })
                dynamicRoutes.push(<Route exact key={'index'} path="/" render={() => <Redirect to="/article/index"/>}/>)
            }
        } else {
            dynamicRoutes.push(<Route exact key={'index'} path="/" render={() => <Redirect to="/login"/>}/>)
        }
        console.log(dynamicRoutes)

        //静态路由表
        let constantRoutes = constantRouterMap.map((route) =>
            <Route
                key={route.path}
                path={route.path}
                name={route.name}
                render={() => (<route.component/>)}/>
        )
        return (
            <Router>
                <Switch>
                    {constantRoutes}
                    {dynamicRoutes}
                    <Route component={Page404}/>
                </Switch>
            </Router>
        )
    }
}


const mapStateToProps = state => {
    return {
        routes: state.routes,
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserInfo: (payload) => {
            dispatch({type: 'login', payload})
        },
        test: (payload) => {
            dispatch({type: 'test', payload})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

