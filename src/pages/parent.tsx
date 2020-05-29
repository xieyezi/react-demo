import React, { Component } from 'react'
import { Button } from 'antd'
import Son1 from './son1'
import Son2 from './son2'
import Son3 from './son3'

interface Istate {
  info1: string
  info2: string
}
export class Parent extends Component<Istate> {
  state: Istate = {
    info1: 'info1',
    info2: 'info2',
  }
  info1Change = () => {
    this.setState({
      info1: 'info1被改变了...',
    })
  }
  change = () => {}
  render() {
    return (
      <div>
        <p>父组件</p>
        <Button onClick={this.info1Change}> 点击更改info1</Button>
        <Son1 info1={this.state.info1} />
        <Son2 info2={this.state.info2} change={this.change} />
        <Son3 info2={this.state.info2} />
      </div>
    )
  }
}

export default Parent
