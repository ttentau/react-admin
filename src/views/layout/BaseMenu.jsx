import React from 'react'
import { Icon, Layout, Menu} from "antd"
import {routeConfig} from '../../route'
import {withRouter} from "react-router-dom"

const {Sider} = Layout
const SubMenu = Menu.SubMenu

class BaseMenu extends React.Component {

    state = {}


    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }

    onCollapse = () => {
        this.props.onMenuCollapse(!this.props.isMenuCollapse)
    }

    nav(url) {
        this.props.history.push(url)
    }

    render() {
        let pathname = window.location.pathname
        //todo  加上这个 openKeys 之后，点击打开，奇怪了

        // let submenu = []
        // routeConfig.map(v => {
        //     if (v.path !== '/' && pathname.includes(v.path)) {
        //         if (v.children&&v.children.length!==1) {
        //         }
        //         submenu.push(v.path)
        //
        //     }
        // })
        // console.log(submenu)

        let menus = routeConfig.reduce((acc, cur, i) => {
            if (cur.layout === 'app') {
                let menu = ''
                if (cur.children && !cur.hidden) {
                    if (cur.children.length === 1) {
                        let firstItem = cur.children[0]
                        menu = (
                            <Menu.Item key={cur.path + firstItem.path}
                                       onClick={this.nav.bind(this, cur.path + firstItem.path)}>
                                <Icon type="pie-chart"/>
                                <span>
                                    {firstItem.meta.title}
                                </span>
                            </Menu.Item>
                        )
                    } else {
                        menu = (
                            <SubMenu key={cur.path}
                                     title={<span><Icon type="team"/><span>{cur.meta.title}</span></span>}>
                                {
                                    cur.children.map(v =>
                                        v.hidden ? '' : (
                                            <Menu.Item key={cur.path + v.path}
                                                       onClick={this.nav.bind(this, cur.path + v.path)}>
                                                {v.meta.title}
                                            </Menu.Item>
                                        )
                                    )
                                }
                            </SubMenu>
                        )
                    }
                }
                acc.push(menu)
                return acc
            }
            return acc
        }, [])

        return (
            <Sider
                style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}
                collapsible
                collapsed={this.props.isMenuCollapse}
                onCollapse={this.onCollapse}
            >
                <Menu theme="dark"
                      // openKeys={submenu}
                      selectedKeys={[pathname]}
                      defaultOpenKeys={['/article']}
                      defaultSelectedKeys={['/article/index']}
                      mode="inline">
                    {menus}
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(BaseMenu)