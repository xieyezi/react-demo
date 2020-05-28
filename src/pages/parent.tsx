import React, { Component } from 'react'
import { connect } from 'react-redux'

interface Iprops {
  state?: object
}
export class Parent extends Component<Iprops> {
  render() {
    return (
      <div>
        <p>父组件</p>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  state: state,
})

export default connect(mapStateToProps)(Parent)
