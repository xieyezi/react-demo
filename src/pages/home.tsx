import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'antd'
import { namespace } from '../models/model1'

interface Iprops {
  goodsList: any[]
  dispatch: any
}

const Home: React.FC<Iprops> = ({ dispatch, goodsList }) => {
  const [info, setInfo] = useState('init info')

  // 获取商品列表
  const getList = () => {
    dispatch({
      type: `${namespace}/getGoodsList`
    })
  }
  useEffect(() => {
    getList()
    return () => dispatch({ type: `${namespace}/clearData` })
    // eslint-disable-next-line
  }, [])

  return (
    <div style={{ marginTop: '5px', marginLeft: '400px', marginRight: '400px' }}>
      <p>我是home页</p>
      <p>{info}</p>
      <Button onClick={() => setInfo('改变info')}> 点击更改info</Button>
      <Button onClick={getList}> 点击获取列表</Button>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {goodsList.map((item, index) => {
          return <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={item} />}></Card>
        })}
      </div>
    </div>
  )
}

const mapStateToProps = model => ({
  goodsList: model[namespace].goodsList
})

export default connect(mapStateToProps)(Home)
