import React, { memo } from 'react'
import { Button } from 'antd'

interface Iprops {
  onVisible: () => void
}
const Son1: React.FC<Iprops> = ({ onVisible }) => {
  console.log('我被重新渲染了....')
  return (
    <div>
      <Button onClick={() => onVisible()}>button</Button>
    </div>
  )
}
export default memo(Son1)
