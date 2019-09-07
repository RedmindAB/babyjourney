import { Action } from 'redux'

export type BottomTabBarState = {
  visible: boolean
}

export interface HideBottomTabBarAction extends Action {
  type: '@bottomTabBar/HIDE'
}

export interface ShowBottomTabBarAction extends Action {
  type: '@bottomTabBar/SHOW'
}

export type BottomTabBarActions = HideBottomTabBarAction | ShowBottomTabBarAction
