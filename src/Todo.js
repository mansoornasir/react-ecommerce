import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

        this.state = {
            item: "",
            list: [{text: "Item1", status: false}, {text: "Item1", status: true}, {text: "Item1", status: false}],
            search: "",
            temp: []
        }
    }
    handleChange(e) {
        this.setState({
            item: e.target.value
        })
    }
    // TODO 
    /**
     * Deletion
     * Search
     * Keyboard Integration
     */
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.item === "") {
            alert("Empty item not allowed. (Da sa k?)")
        }
        else if (this.state.list.indexOf(this.state.item) < 0) {
            this.setState({
                list: this.state.list.concat(this.state.item)
            })
        }
        else {
            alert("Item is already in the list.")
        }
    }
    handleSearch(e) {
        this.setState({
            search: e.target.value
        })
        // const match = this.state.list.find(it => it.includes(this.state.search))
        // console.log(match)

        var matches = this.state.list.filter((str) => {
            return str.charAt(0) == this.state.search
        })
        if (matches.length > 0) {
            this.setState({
                temp: matches
            })
        }
        if (e.target.value === "") {
            this.setState({ temp: [] })
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    id="search"
                    name="search"
                    onChange={this.handleSearch}
                    value={this.state.search}
                />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="item"
                        name="item"
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
                {
                    this.state.temp.length === 0 && <ul>
                        {
                            this.state.list.map((l, k) => {
                                return (
                                        <li key={k}>
                                            <input 
                                                type="checkbox"
                                                
                                            />
                                            {l}
                                        </li>)
                            })
                        }
                    </ul>
                }
                {this.state.temp.length != 0 && <ul>
                    {
                        this.state.temp.map((l, k) => {
                            return <li key={k}>{l}</li>
                        })
                    }
                </ul>}
                <button onClick={() => this.setState({ list: [] })}>Reset</button>
            </div>
        )
    }
}
