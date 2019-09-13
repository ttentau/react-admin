import React from 'react'
import {Icon, Layout, Menu} from "antd"
import {routeConfig} from '../../route'
import {Route} from "react-router-dom"
import Link from "react-router-dom/Link"

const {Sider} = Layout
const SubMenu = Menu.SubMenu

export default class BaseMenu extends React.Component {

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

    render() {
        let menus = routeConfig.reduce((acc, cur, i) => {
            if (cur.layout === 'app') {
                let menu = ''
                if (cur.children) {
                    if (cur.children.length === 1) {
                        let firstItem = cur.children[0]
                        menu = (
                            <Menu.Item key={cur.path + firstItem.path}>
                                <Icon type="pie-chart"/>
                                <span>
                                    <Link to={cur.path + firstItem.path}>
                                        {firstItem.meta.title}
                                    </Link>
                                </span>
                            </Menu.Item>
                        )
                    } else {
                        menu = (
                            <SubMenu key="sub2" title={<span><Icon type="team"/><span>{cur.meta.title}</span></span>}>
                                {
                                    cur.children.map(v => (
                                            <Menu.Item key={cur.path + v.path}>
                                                <Link to={cur.path + v.path}>
                                                    {v.meta.title}
                                                </Link>
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
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {menus}
                </Menu>
            </Sider>
        )
    }
}
