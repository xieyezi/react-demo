import React, { Component } from 'react'

interface Iprops {
  info2: string
}

class Son3 extends Component<Iprops> {
  // 利用生命周期 shouldComponentUpdate 进行比较
  shouldComponentUpdate(nextProps: Iprops, nextState: any) {
    if (nextProps.info2 === this.props.info2) return false
    return true
  }
  render() {
    console.log('son3重新渲染了....')
    return (
      <div>
        <p>我是son3</p>
        <p>{this.props.info2}</p>
      </div>
    )
  }
}
export default Son3
