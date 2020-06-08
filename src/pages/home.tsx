import React, { useState, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import { Button, Input, Modal } from 'antd'
import { namespace } from '../models/model1'
import Son1 from './son1'
import useVisible from '../hooks/useVisible'

interface Iprops {
  goodsList: any[]
  dispatch: any
}

const Home: React.FC<Iprops> = ({ dispatch, goodsList }) => {
  const [info, setInfo] = useState('')
  // const [visible, setVisible] = useState(true)
  // const onVisible = useMemo(() => {
  //   return () => {
  //     setVisible(visible => !visible)
  //   }
  // }, [])

  // const onVisible = useCallback(() => {
  //   setVisible(visible => !visible)
  // }, [])
  // const changeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value
  //   setInfo(value)
  // }
  const [visible, setVisible] = useVisible(false)
  const modalShow = (value: boolean) => {
    setVisible(value)
  }

  return (
    <div style={{ marginTop: '5px', marginLeft: '400px', marginRight: '400px' }}>
      <p>{info}</p>
      {/* <Input onChange={e => changeInfo(e)}></Input> */}
      {/* <Son1 onVisible={onVisible} /> */}
      <Button type="primary" onClick={() => modalShow(true)}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={visible} onOk={() => modalShow(false)} onCancel={() => modalShow(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

const mapStateToProps = model => ({
  goodsList: model[namespace].goodsList
})

export default connect(mapStateToProps)(Home)
