import React, { Component } from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

import TastyDonut from 'tasty-donuts'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stepNumber: 3,
      gap: 5,
      completed: 0
    }
  }
  render() {
    return (
      <div
        style={{
          margin: '50px auto',
          width: '600px'
        }}
      >
        <TastyDonut
          stepNumber={this.state.stepNumber}
          gap={this.state.gap}
          completed={this.state.completed}
        />
        <div style={{ marginTop: '50px' }}>
          <label>
            Step Number
            <InputRange
              maxValue={20}
              minValue={3}
              value={this.state.stepNumber}
              onChange={value => this.setState({ stepNumber: value })}
            />
          </label>
          <label>
            Gap
            <InputRange
              maxValue={20}
              minValue={0}
              value={this.state.gap}
              onChange={value => this.setState({ gap: value })}
            />
          </label>
          <label>
            Completed Steps
            <InputRange
              maxValue={this.state.stepNumber}
              minValue={0}
              value={this.state.completed}
              onChange={value => this.setState({ completed: value })}
            />
          </label>
        </div>
      </div>
    )
  }
}
