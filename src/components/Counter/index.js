import React, { Component } from 'react';
import Button from './../Button/'
class Counter extends Component {
    state = {
      count: 10
    }
    increaseCounter = () => {
      console.log("Hello");
      this.setState({count: this.state.count + 5})
    }
    decreaseCounter = () => {
      console.log("hi")
      this.setState({count: this.state.count - 5})
    }
  render() {
    
    return (
      
      <div className="divButton">
        Counter: {this.state.count}
        <Button caption="Add 5" onClick={this.increaseCounter}></Button>
        <Button caption="Decrease 5" onClick={this.decreaseCounter}></Button>
      </div>
    );
  }
}

export default Counter;
