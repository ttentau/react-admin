import React, {Component} from "react"
import {withRouter} from "react-router-dom"
import {Button} from "antd"

class Page404 extends Component {

    back = () => {
        this.props.history.push('/')
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
                <Button onClick={this.back}>返回</Button>
            </div>
        );
    }
}


export default withRouter(Page404)

