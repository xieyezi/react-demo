const preloadedState = {
  info: '我是redux里面的初始值',
}
export default (state = preloadedState, action: any) => {
  switch (action.type) {
    case 'CHANGE_FROM_HOME':
      return { ...state, ...action.payload }

    case 'CHANGE_FROM_ABOUT':
      return { ...state, ...action.payload }

    case 'CHANGE_FROM_INTRO':
      return { ...state, ...action.payload }

    default:
      return state
  }
}
