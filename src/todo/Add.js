import React, { Component } from 'react'

export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            taskText: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            taskText: e.target.value
        })
    }
    handleSubmit = () => {

    }
    render() {
        return (
            <div>
                <h1>Add new tasks</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        id="item"
                        name="item"
                        value={this.state.taskText}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}
