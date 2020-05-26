import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { changeFromAboutAction } from '../store/action'

interface Iprops {
  info?: string
  changeFromAbout: (text: object) => void
}

export class About extends Component<Iprops> {
  changeFormAbout = () => {
    this.props.changeFromAbout({ info: '从about更改state的info' })
  }
  render() {
    return (
      <div>
        <p>我是about页</p>
        <p>{this.props.info}</p>
        <Button onClick={this.changeFormAbout}> about点击更改redux</Button>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  info: state.info,
})
const mapDispatchToProps = (dispatch: any) => ({
  changeFromAbout: (text: object) => dispatch(changeFromAboutAction(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
