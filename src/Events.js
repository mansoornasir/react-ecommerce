import React, { Component } from 'react'

export default class Events extends Component {
  handleEvent(event) {
    console.log(event.target.name)
  }
  render() {
    return (
      <div>
        <button onClick={(event) => this.handleEvent(event)} name="plus">Plus</button>
        <button onClick={this.handleEvent}>Minus</button>
        <button onClick={this.handleEvent}>Reset</button>
      </div>
    )
  }
}
