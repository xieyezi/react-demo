import { getGoodsList } from '../../services'

export const namespace = 'model1'
interface IDvaState {
  goodsList: any[]
}
const state: IDvaState = {
  goodsList: []
}
const model1 = {
  namespace,
  state,
  effects: {
    *changeInfo1({ payload }, { put }) {
      try {
        const { text } = payload
        yield put({
          type: 'setState',
          payload: { info1: text }
        })
        // eslint-disable-next-line no-empty
      } catch (error) {}
    },
    *getGoodsList(_, { call, put }) {
      try {
        const res = yield call(getGoodsList)
        // console.log(res.data.banerList)
        yield put({
          type: 'setState',
          payload: {
            goodsList: res.data.banerList
          }
        })
        // eslint-disable-next-line no-empty
      } catch (error) {}
    },
    *clearData(_, { put }) {
      yield put({
        type: 'setState',
        goodsList: []
      })
    }
  },
  reducers: {
    setState(state: IDvaState, { payload }) {
      return { ...state, ...payload }
    }
  }
}

export default [model1]
