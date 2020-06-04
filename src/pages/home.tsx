import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { namespace } from '../models/model1'

interface Iprops {
  info1?: string
  dispatch: any
}

export class Home extends Component<Iprops> {
  changeFormHome = () => {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/changeInfo1`,
      payload: {
        text: '从Home改变的info1'
      }
    })
  }
  render() {
    console.log(this.props.info1)
    return (
      <div style={{ marginTop: '5px', marginLeft: '400px', marginRight: '400px' }}>
        <p>我是home页</p>
        <p>{this.props.info1}</p>
        <Button onClick={this.changeFormHome}> home点击更改redux</Button>
      </div>
    )
  }
}

const mapStateToProps = (model: any) => ({
  info1: model[namespace].info1
})

export default connect(mapStateToProps)(Home)
