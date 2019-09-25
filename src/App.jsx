import React, {Component} from 'react'
import './App.less'
import BaseLayout from './views/layout/BaseLayout'

export default class App extends Component {
    render() {
        return (
            <BaseLayout {...this.props}/>
        )
    }
}
