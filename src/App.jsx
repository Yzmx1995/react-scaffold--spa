import React, { Component } from 'react';
import Home from './pages/home/index'
import Home1 from './pages/index1'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      testMsg: 'test',
    }
  }
  render() {
    return (
      <div className="App">
        <h2>标题:{process.env.NODE_ENV}</h2>
        <h1>
          /* IFTRUE_development */
          development
          /* FITRUE_development */
          /* IFTRUE_production */
          production
          /* FITRUE_production */
          /* IFTRUE_staging */
          staging
          /* FITRUE_staging */
        </h1>
        <Home></Home>
        <Home1></Home1>
      </div>
    );
  }
}

export default App;