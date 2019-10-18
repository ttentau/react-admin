import React, {Component} from "react"
import {Card, Input, Button, Spin} from 'antd'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class Login extends Component {
    state = {loading: false}

    componentDidMount() {
        if (this.props.token) {
            window.history.back()
        }
    }

    login = () => {
        this.setState({loading: !this.state.loading})
        this.props.setToken()
        setTimeout(() => {
            this.props.history.push('/')
            // this.props.history.push('/article/index')
        }, 800)
    }

    render() {
        return (
            <div className='Login' style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                height: '100%',
                background: '#f1f1f1'
            }}>
                <Spin spinning={this.state.loading}>
                    <Card title="运营平台登录" style={{width: 300}}>
                        <Input placeholder="账号"/>
                        <Input placeholder="密码" style={{marginTop: 20}}/>
                        <Button style={{marginTop: 20, width: '100%'}} type="primary"
                                onClick={this.login}>登录</Button>
                    </Card>
                </Spin>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setToken: () => {
            console.log(111)
            dispatch({type: 'login', payload: 1})
        }
    }
}
Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default withRouter(Login)

