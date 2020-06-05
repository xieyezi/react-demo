import React, { Component } from 'react'

interface Iprops {
  changeInfo: () => void
}

// class Son1 extends Component<Iprops> {
//   render() {
//     console.log('son1重新渲染了....')
//     return (
//       <div>
//         <p>我是son1</p>
//         <p>{this.props.info1}</p>
//       </div>
//     )
//   }
// }
const Son1: React.FC<Iprops> = ({ changeInfo }) => {

  return (
    
  )
}
export default Son1
