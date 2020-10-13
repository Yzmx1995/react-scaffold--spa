import React, { Component } from 'react';
import Axios from 'axios';

class TestComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      msg: 'before change',
    }
  }
  f1() {
    this.setState({ msg: 'change11122221' });
  }
  render() {
    const { state: { msg, msg1 }, f1 } = this;
    return (
      <div>
        <div>{msg}</div>
        <div onClick={f1.bind(this)}>click111</div>
      </div>
    )
  }
}

export default TestComponent;