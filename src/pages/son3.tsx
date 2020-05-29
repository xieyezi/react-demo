import React, { memo } from 'react'
interface Iprops {
  info2: string
}
const Son3: React.FC<Iprops> = (props) => {
  console.log('son3重新渲染了....')
  return (
    <div>
      <p>我是Son3</p>
      <p>{props.info2}</p>
    </div>
  )
}

export default memo(Son3)
