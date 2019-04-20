import React, {Component} from 'react'
import './App.less'

import {
    Layout, Menu, Breadcrumb, Icon, Dropdown, Avatar, Badge
} from 'antd'
import {Link} from "react-router-dom"

const {
    Header, Content, Sider,
} = Layout

const SubMenu = Menu.SubMenu

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    }

    onCollapse = () => {
        // console.log(collapsed)
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Icon type="bell" className=''/>
                    <span>个人中心</span>
                </Menu.Item>
                <Menu.Item>
                    <Icon type="setting" className=''/>
                    <span>个人设置</span>
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item>
                    <Icon type="logout" className=''/>
                    <span>退出登录</span>
                </Menu.Item>
            </Menu>
        )

        return (
            <Layout style={{minHeight: '100vh'}}>
                <Header style={{background: '#fff', padding: 0, position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className='header-left'>
                        <div className="logo mr20p">
                            个人博客
                        </div>
                        <Icon type="menu-unfold" onClick={this.onCollapse}/>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="header-right">
                        <Dropdown overlay={menu}>
                            <span className="ant-dropdown-link d-flex align-items-center">
                                <Avatar icon="user"/>
                                <span className='ml10p'>TTentau</span>
                            </span>
                        </Dropdown>

                        <Badge count={25} className='mr40p ml30p'>
                            <Icon type="bell" className='f20'/>
                        </Badge>
                    </div>
                </Header>
                <Layout style={{marginTop: 64}}>
                    <Sider
                        style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart"/>
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop"/>
                                <span>Option 2</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user"/><span>User</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team"/><span>Team</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file"/>
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '20px', marginLeft: this.state.collapsed ? 80 : 200}}>
                        <div style={{padding: 24, background: '#fff', height: '2222px'}}>
                            <nav>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/article'>article</Link></li>
                                    <li><Link to='/Login'>Login</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className='App'>
                <SiderDemo/>
            </div>
        )
    }
}

export default App
