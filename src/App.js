import React, { Component } from 'react';
import Counter from './components/counter';
import { User } from './components/user';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => console.log("clicked")} />
        <User />
        <Counter></Counter>
      </React.Fragment>
    );
  }
}

export default App;
