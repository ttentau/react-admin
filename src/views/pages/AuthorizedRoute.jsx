import React from 'react'
import {Redirect, Route, withRouter} from 'react-router-dom'
import {connect} from "react-redux"

class AuthorizedRoute extends React.Component {
    state = {}

    /** 跳转到某个路由之前触发 **/
    onEnter(Component) {
        if (this.props.token) {
            return <Component {...this.props} currentPath={this.props.path}/>;
        }
        return <Redirect to="/login"/>;
    }

    render() {
        console.log(this)

        return (
            <Route
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
    }
}
AuthorizedRoute = connect(mapStateToProps)(AuthorizedRoute)

export default withRouter(AuthorizedRoute)

