import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFromHIntroAction } from '../store/action'
import { Button } from 'antd'

interface Iprops {
  info?: string
  changeFormIntro: (text: object) => void
}

export class Intro extends Component<Iprops> {
  changeFormIntro = () => {
    this.props.changeFormIntro({ info: '从intro更改state的info' })
  }
  render() {
    return (
      <div>
        <p>我是intro页</p>
        <p>{this.props.info}</p>
        <Button onClick={this.changeFormIntro}> intro点击更改redux</Button>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  info: state.info.info,
})
const mapDispatchToProps = (dispatch: any) => ({
  changeFormIntro: (text: object) => dispatch(changeFromHIntroAction(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
