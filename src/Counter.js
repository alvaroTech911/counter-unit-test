import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  decrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      }
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Current count: {count}</p>
        <button
          className="increment"
          type="button"
          onClick={this.increment}
        >
          Increment Count
        </button>
        <button
          className="decrement"
          type="button"
          onClick={this.decrement}
        >
          Decrement Count
        </button>
      </div>
    );
  }
}

export default Counter;
