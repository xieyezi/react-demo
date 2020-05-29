import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { changeFromHomeAction } from '../store/action'

interface Iprops {
  info?: string
  dispatch: any
  history: any
  changeFromHome: (text: object) => void
}

export class Home extends Component<Iprops> {
  changeFormHome = () => {
    console.log(this.props)
    this.props.changeFromHome({ info: '从home更改state的info' })
    // this.props.history.push('detail')
  }
  render() {
    return (
      <div>
        <p>我是home页</p>
        <p>{this.props.info}</p>
        <Button onClick={this.changeFormHome}> home点击更改redux</Button>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  info: state.info.info,
})

const mapDispatchToProps = (dispatch: any) => ({
  changeFromHome: (text: object) => dispatch(changeFromHomeAction(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
