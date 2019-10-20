import React, {Component} from "react"
import {Form, Icon, Input, Button, Checkbox, Spin, Card} from 'antd';
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import constant from "../../utils/constant"
import {asyncRouterMap} from '../../route/asyncRouterMap'

class Login extends Component {
    state = {loading: false}

    componentDidMount() {
        if (this.props.token) {
            // window.history.back()
            this.props.history.push('/')
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                this.setState({loading: !this.state.loading})
                let resToken = await window.$api.user.login(this.props.form.getFieldsValue())
                if (resToken.code === constant.SUCCESS) {
                    let resUser = await window.$api.user.userInfo(resToken.data)
                    if (resUser.code === constant.SUCCESS) {
                        window.$util.success('登录成功')
                        resUser.data.routes = asyncRouterMap
                        this.props.setUserInfo({token: resToken.data, userInfo: resUser.data})
                        setTimeout(() => {
                            this.props.history.push('/')
                        }, 800)
                    } else {
                        window.$util.error(resUser.msg)
                    }
                } else {
                    window.$util.error(resToken.msg)
                }
                setTimeout(() => {
                    this.setState({loading: !this.state.loading})
                }, 800)
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className='Login' style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                height: '100%',
                background: '#f1f1f1'
            }}>
                <Spin spinning={this.state.loading}>
                    <Card title="运营平台登录" style={{width: 400}}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{required: true, message: '请输入用户名!'}],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="用户名"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码!'}],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password"
                                        placeholder="密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>记住密码</Checkbox>)}
                                <a className="pull-right" href="https://www.baidu.com">
                                    忘记密码
                                </a>
                                <Button
                                    style={{width: '100%'}}
                                    type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                                或者 <a href="https://www.baidu.com">现在注册!</a>
                            </Form.Item>
                        </Form>
                    </Card>
                </Spin>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form.create({name: 'normal_login'})(Login)))

