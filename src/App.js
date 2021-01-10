import React, { Component } from 'react';
import { User } from './components/user';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => console.log("clicked")} />
        <User />
      </React.Fragment>
    );
  }
}

export default App;
