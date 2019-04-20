import React, {Component} from "react"
import {Card, Input, Button} from 'antd'

class Login extends Component {


    login = () => {
        console.log(666)
    }

    render() {
        return (
            <div className='Login' style={{display: 'flex', justifyContent: 'center', alignItems: "center", height: '100%', background: '#f1f1f1'}}>
                <Card title="运营平台登录" style={{width: 300}}>
                    <Input placeholder="账号"/>
                    <Input placeholder="密码" style={{marginTop: 20}}/>
                    <Button style={{marginTop: 20, width: '100%'}} type="primary" onClick={this.login}>登录</Button>
                </Card>
            </div>
        )
    }
}

export default Login
