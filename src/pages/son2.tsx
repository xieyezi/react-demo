import React, { Component } from 'react'

interface Iprops {
  info1: string
}

class Son2 extends Component<Iprops> {
  render() {
    console.log('son2重新渲染了....')
    return (
      <div>
        <p>我是son2</p>
        <p>{this.props.info1}</p>
      </div>
    )
  }
}
export default Son2
