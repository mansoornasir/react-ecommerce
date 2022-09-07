import React, { Component } from 'react'
import Add from './Add'
import List from './List'
import Reset from './Reset'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{"text": "Sabzi", "status": "incomplete"},
                    {"text": "Pampers", "status": "incomplete"},
                    {"text": "Tamatar", "status": "incomplete"},
                    {"text": "Shimla Mirch", "status": "complete"},
                    {"text": "Nothing Special", "status": "incomplete"}]
        }
    }
    render() {
        return (
            <div>
                <h1>Total: {this.state.tasks.length}</h1>
                <h1>Complete: {this.state.tasks.filter(task => task.status === "complete").length}</h1>
                <h1 style={{color: 'red'}}>Incomplete {this.state.tasks.filter(task => task.status === "incomplete").length}</h1>
                <Add />
                <List tasks={this.state.tasks} />
                <Reset />
            </div>
        )
    }
}
