import React from "react"
import {Avatar, Badge, Breadcrumb, Dropdown, Icon, Layout, Menu} from "antd"

const {Header} = Layout

export default class BaseHeader extends React.Component {
    state = {
    }

    onCollapse = () => {
        this.props.onMenuCollapse(!this.props.isMenuCollapse)
    }
    onRightBarCollapse = () => {
        this.props.onRightSideBarCollapse(!this.props.isRightSideBarCollapsed)
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
        return(
            <Header style={{background: '#fff', padding: 0, position: 'fixed', zIndex: 1, width: '100%'}}>
                <div className='header-left'>
                    <div className="logo ">
                        个人博客
                    </div>
                    <Icon type="menu-unfold" onClick={this.onCollapse}/>
                    <Breadcrumb  className='ml20p'>
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

                    <Badge count={25} className='mr40p ml30p cp' onClick={this.onRightBarCollapse}>
                        <Icon type="bell" className='f20'/>
                    </Badge>
                </div>
            </Header>
        )
    }
}
