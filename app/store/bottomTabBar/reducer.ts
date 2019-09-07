import { Reducer } from 'redux'
import { BottomTabBarState, BottomTabBarActions } from './types'

const INITIAL_STATE: BottomTabBarState = {
  visible: true
}

export const bottomTabBarReducer: Reducer<BottomTabBarState, BottomTabBarActions> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case '@bottomTabBar/HIDE':
      return { ...state, visible: false }
    case '@bottomTabBar/SHOW':
      return { ...state, visible: true }
    default:
      return state
  }
}
