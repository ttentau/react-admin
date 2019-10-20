import React from 'react'
import {Redirect, Route, withRouter} from 'react-router-dom'
import {connect} from "react-redux"

class AuthorizedRoute extends React.Component {
    state = {}

    /** 跳转到某个路由之前触发 **/
    onEnter(Component) {
        if (this.props.token) {
            if (!this.props.userInfo.account) {
                this.getUserInfo(this.props.token)
            }
            return <Component {...this.props} currentPath={this.props.path}/>;
        }
        return <Redirect to="/login"/>;
    }

    getUserInfo(token) {
        window.$api.user.userInfo(token).then(
            resUser => {
                // console.log(resUser)
                if (resUser.code === window.$constant.SUCCESS) {
                    this.props.setUserInfo({token: token, userInfo: resUser.data})
                } else {
                    window.$util.error(resUser.msg)
                }
            }
        )
    }

    render() {
        // console.log(this)
        return (
            <Route
                key={this.props.path}
                path={this.props.path}
                name={this.props.path}
                render={() => this.onEnter(this.props.component)}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        token: state.token,
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserInfo: (payload) => {
            dispatch({type: 'login', payload})
        }
    }
}
AuthorizedRoute = connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute)

export default withRouter(AuthorizedRoute)

