import React, { Component } from 'react';
import images from '@/assets/images'
class TestComponent extends Component {
  render() {
    return (
      <div>
        <img src={images['test-gif']} />
      </div>
    )
  }
}

export default TestComponent;