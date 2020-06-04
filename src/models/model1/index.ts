export const namespace = 'model1'
interface IDvaState {
  info1: string
}
const state: IDvaState = {
  info1: 'init info1'
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
    }
  },
  reducers: {
    setState(state: IDvaState, { payload }) {
      return { ...state, ...payload }
    }
  }
}

export default [model1]
