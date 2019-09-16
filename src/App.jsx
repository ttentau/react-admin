import React, {Component} from 'react'
import './App.less'
import BaseLayout from './views/layout/BaseLayout'

export default class App extends Component {
    render() {
        // console.log(window.location)
        // console.log(this.props)
        return (
            <BaseLayout/>
        )
    }
}
