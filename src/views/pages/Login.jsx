import React, {Component} from "react"
import {Card, Input, Button, Spin} from 'antd'

class Login extends Component {
    state = {loading: false}

    login = () => {
        this.setState({loading: !this.state.loading})
        setTimeout(()=>{
            this.props.history.push('/')
        },800)
    }

    render() {


        return (
            <div className='Login' style={{display: 'flex', justifyContent: 'center', alignItems: "center", height: '100%', background: '#f1f1f1'}}>
                <Spin spinning={this.state.loading}>
                    <Card title="运营平台登录" style={{width: 300}}>
                        <Input placeholder="账号"/>
                        <Input placeholder="密码" style={{marginTop: 20}}/>
                        <Button style={{marginTop: 20, width: '100%'}} type="primary" onClick={this.login}>登录</Button>
                    </Card>
                </Spin>
            </div>

        )
    }
}

export default Login
