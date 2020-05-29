import React, { PureComponent } from 'react'

interface Iprops {
  info2: string
  change: () => void
}

class Son2 extends PureComponent<Iprops> {
  // 利用生命周期 shouldComponentUpdate 进行比较
  // shouldComponentUpdate(nextProps: Iprops, nextState: any) {
  //   if (nextProps.info2 === this.props.info2) return false
  //   return true
  // }
  render() {
    console.log('son2重新渲染了....')
    return (
      <div>
        <p>我是son2</p>
        <p>{this.props.info2}</p>
      </div>
    )
  }
}
export default Son2
