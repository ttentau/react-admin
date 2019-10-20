import React from "react"
import {Avatar, Badge, Breadcrumb, Dropdown, Icon, Layout, Menu} from "antd"
import {withRouter} from "react-router-dom"
import {asyncRouterMap} from '../../route/asyncRouterMap'
import {connect} from "react-redux"

const {Header} = Layout

class BaseHeader extends React.Component {
    state = {}

    onCollapse = () => {
        this.props.onMenuCollapse(!this.props.isMenuCollapse)
    }
    onRightBarCollapse = () => {
        this.props.onRightSideBarCollapse(!this.props.isRightSideBarCollapsed)
    }

    logout = () => {
        window.$util.loading()
        this.props.reduxLogout()
        this.props.history.push('/login')
    }

    render() {
        // console.log(routeConfig)
        let pathname = window.location.pathname

        let breadcrumbList = []
        asyncRouterMap.map(v => {
            if (v.path !== '/' && pathname.includes(v.path)) {
                breadcrumbList.push(<Breadcrumb.Item key={v.path}>{v.meta.title}</Breadcrumb.Item>)
                v.children.map(w => {
                    if (pathname.includes(w.path)) {
                        breadcrumbList.push(<Breadcrumb.Item key={w.path}>{w.meta.title}</Breadcrumb.Item>)
                    }
                    return ''
                })
            }
            return ''
        })

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
                <Menu.Item onClick={this.logout}>
                    <Icon type="logout" className=''/>
                    <span>退出登录</span>
                </Menu.Item>
            </Menu>
        )
        return (
            <Header style={{background: '#fff', padding: 0, position: 'fixed', zIndex: 99999, width: '100%'}}>
                <div className='header-left'>
                    <div className="logo">
                        个人博客
                    </div>
                    <Icon type="menu-unfold" onClick={this.onCollapse}/>
                    <Breadcrumb className='ml20p'>
                        {breadcrumbList}
                    </Breadcrumb>
                </div>
                <div className="header-right mr30p">
                    <Dropdown overlay={menu} className='mr20p'>
                            <span className="ant-dropdown-link d-flex align-items-center">
                                <Avatar icon="user"/>
                                <span className='ml10p'>{this.props.userInfo.account}</span>
                            </span>
                    </Dropdown>

                    <Badge count={25} className='cp' onClick={this.onRightBarCollapse}>
                        <Icon type="bell" className='f20'/>
                    </Badge>
                </div>
            </Header>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reduxLogout: () => {
            dispatch({type: 'logout'})
        }
    }
}
BaseHeader = connect(mapStateToProps, mapDispatchToProps)(BaseHeader)

export default withRouter(BaseHeader)
