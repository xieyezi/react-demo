import React, { Component } from 'react'

interface Iprops {
  info1: string
}

class Son1 extends Component<Iprops> {
  render() {
    console.log('son1重新渲染了....')
    return (
      <div>
        <p>我是son1</p>
        <p>{this.props.info1}</p>
      </div>
    )
  }
}
export default Son1
