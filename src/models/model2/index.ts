export const namespace = 'model2'
export interface IDvaState {
  info2: string
}
const state: IDvaState = {
  info2: 'info2'
}
const model2 = {
  namespace,
  state,
  effects: {
    *changeInfo2({ payload }, { put }) {
      try {
        const { text } = payload
        yield put({
          type: 'setState',
          payload: { info2: text }
        })
      } catch (error) {}
    }
  },
  reducers: {
    setState(state: IDvaState, { payload }) {
      return { ...state, ...payload }
    }
  }
}

export default [model2]
