import React, { Component } from 'react'

export default class Counter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0
      }
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 2 });
      };

  render() {
    return (
      <div>
        <h1>Count the Value :{this.state.counter}</h1>
        <button onClick={this.increment}>Count</button>
      </div>
    )
  }
}


// Class base component
