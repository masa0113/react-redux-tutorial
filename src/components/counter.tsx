import React from 'react';
import { Count } from '../model/count';

class Counter extends React.Component<{}, Count> {
  constructor(props: Count) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  countChange = (status: "+" | "-") => {
    if (status === "+") this.setState({ count: this.state.count + 1 });
    else this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={() => this.countChange("+")}>+1</button>
        <button onClick={() => this.countChange("-")}>-1</button>
      </React.Fragment>
    );
  }
}

export default Counter;