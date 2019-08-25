import React from 'react'
import {Layout} from 'antd'
import {Link, Route} from "react-router-dom"
import Article from "../Article"
import BaseHeader from "./BaseHeader"
import BaseMenu from "./BaseMenu"
import BaseRightBar from "./BaseRightBar"

const {Content} = Layout

export default class BaseLayout extends React.Component {
    state = {
        menuCollapsed: false,
        rightSideBarCollapsed: true
    }

    onMenuCollapse = (e) => {
        this.setState({menuCollapsed: e})
    }
    onRightSideBarCollapse = (e) => {
        console.log(e)
        this.setState({rightSideBarCollapsed: e})
    }

    render() {
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
                        transition: 'all .2s'
                    }}>
                        <div style={{padding: 24, background: '#fff'}}>
                            <nav>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/app/article'>Article</Link></li>
                                    <li><Link to='/Login'>Login</Link></li>
                                </ul>
                            </nav>
                            <Route path="/app/article" component={Article}/>
                        </div>
                    </Content>
                    <BaseRightBar onRightSideBarCollapse={this.onRightSideBarCollapse}
                                  isRightSideBarCollapsed={this.state.rightSideBarCollapsed}/>

                </Layout>
            </Layout>
        )
    }
}
