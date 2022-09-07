import React, { Component } from 'react'

export default class MyApp extends Component {
    constructor()
    {
        super();
        this.random = this.random.bind(this)
        this.state = {
            num: 0
        }
    }
    componentDidMount() {
        console.log('component did mount')
    }
    componentDidUpdate() {
        console.log('componenet did update')
    }
    componentWillUnmount() {
        console.log('component will unmount')
    }
    random() {
        this.setState({
            num: Math.floor(Math.random() * 100)
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.random}>Click</button>
            </div>
        )
    }
}
