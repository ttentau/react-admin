import React from 'react'
import {Layout} from "antd"
import './BaseRightBar.less'
import Icon from "antd/lib/icon"

const {Sider} = Layout
export default class BaseRightBar extends React.Component {

    state = {}


    componentDidMount() {
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }


    onCollapse = () => {
        this.props.onRightSideBarCollapse(!this.props.isRightSideBarCollapsed)
    }

    render() {
        return (
            <Sider
                style={{overflow: 'auto', height: '100vh', position: 'fixed', right: 0}}
                width='240'
                theme='light'
                collapsedWidth='0'
                collapsed={this.props.isRightSideBarCollapsed}
                onCollapse={this.onCollapse}>
                <div className="messages">
                    <div className="notice">
                        <Icon type="info-circle" theme="filled" />
                        <span>您有条新消息</span>
                        <Icon type="close" className='cp' />
                    </div>
                    <ul>
                        <li className="item">
                            <div className="header">
                                <Icon type="info-circle" theme="twoTone" />
                                <div className="title">xxxx</div>
                                <Icon type="close" className='cp' />
                            </div>
                            <div className="content">
                                xxxxxx
                            </div>
                            <div className="date oh mt5p">
                                <span className="pull-right f12">2019</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </Sider>
        )
    }
}
