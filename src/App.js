import React, { Component } from 'react'
import { render } from 'react-dom';

export default class App extends Component {
  render () {
    return (
      <div>Hope this works</div>
    )
  }
};

render(<App />, document.getElementById('app'));
