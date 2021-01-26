import React, { Component } from 'react'
import Header from './../layout/header'
import Content from './../layout/content'
export default class Home extends Component {
    render() {
        return (
            <div className="h-full">
                <Header/>
                <div className="flex content">
                <Content/>
                </div>
            </div>
        )
    }
}
