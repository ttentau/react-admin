import React from 'react'
import {Layout} from 'antd'
import {Route} from "react-router-dom"
import BaseHeader from "./BaseHeader"
import BaseMenu from "./BaseMenu"
import BaseRightBar from "./BaseRightBar"
import {routeConfig} from '../../route'
import Redirect from "react-router-dom/Redirect"

const {Content} = Layout

export default class BaseLayout extends React.Component {

    constructor(props){
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
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }


    render() {
        let routes = routeConfig.reduce((acc, cur, i) => {
            if (cur.layout === 'app') {
                cur.children.map(v => {
                    return acc.push(<Route path={cur.path + v.path} key={cur.path + v.path} component={v.component}/>)
                })
            }
            return acc
        }, [])

        let isRedirect = window.location.pathname === '/' ? <Redirect to='/article/index'/> : ''

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
                        {isRedirect}
                        {routes}
                        {/*<div style={{padding: 24, background: '#fff'}}>*/}
                        {/*</div>*/}
                    </Content>
                    <BaseRightBar onRightSideBarCollapse={this.onRightSideBarCollapse}
                                  isRightSideBarCollapsed={this.state.rightSideBarCollapsed}/>

                </Layout>
            </Layout>
        )
    }
}
