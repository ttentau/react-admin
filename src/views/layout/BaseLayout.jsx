import React from 'react'
import {Layout} from 'antd'
import {Route} from "react-router-dom"
import BaseHeader from "./BaseHeader"
import BaseMenu from "./BaseMenu"
import BaseRightBar from "./BaseRightBar"

const {Content} = Layout


function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} path={route.path}/>
            )}
        />
    );
}

export default class BaseLayout extends React.Component {

    constructor(props) {
        super(props)
        // console.log('props')
        this.state = {
            menuCollapsed: false,
            rightSideBarCollapsed: true
        }
    }

    onMenuCollapse = (e) => {
        this.setState({menuCollapsed: e})
    }

    onRightSideBarCollapse = (e) => {
        // console.log(e)
        this.setState({rightSideBarCollapsed: e})
    }

    componentDidMount() {
        // console.log(this.props)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }

    render() {
        let routes = this.props.children.reduce((acc, cur) => {
            let path = this.props.currentPath + cur.path
            let props = Object.assign({}, cur, {path})
            acc.push(<RouteWithSubRoutes key={path} {...props}  />)
            return acc
        }, [])
        // console.log(routes)

        // let isRedirect = window.location.pathname === '/' ? <Redirect to='/article/index'/> : ''

        return (
            <Layout style={{minHeight: '100vh'}}>
                <BaseHeader onMenuCollapse={this.onMenuCollapse}
                            isMenuCollapse={this.state.menuCollapsed}
                            onRightSideBarCollapse={this.onRightSideBarCollapse}
                            isRightSideBarCollapsed={this.state.rightSideBarCollapsed}/>
                <Layout style={{marginTop: 64}}>
                    <BaseMenu onMenuCollapse={this.onMenuCollapse} isMenuCollapse={this.state.menuCollapsed}/>
                    <Content style={{
                        padding: '20px',
                        marginLeft: this.state.menuCollapsed ? 80 : 200,
                        marginRight: this.state.rightSideBarCollapsed ? 0 : 240,
                        transition: 'all .2s',
                        background: '#f1f1f1'
                    }}>
                        {routes}
                    </Content>
                    <BaseRightBar onRightSideBarCollapse={this.onRightSideBarCollapse}
                                  isRightSideBarCollapsed={this.state.rightSideBarCollapsed}/>

                </Layout>
            </Layout>
        )
    }
}
