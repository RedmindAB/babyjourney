import { ActionCreator } from 'redux'
import { HideBottomTabBarAction, ShowBottomTabBarAction } from './types'

export const hideBottomTabBar: ActionCreator<HideBottomTabBarAction> = () => ({
  type: '@bottomTabBar/HIDE'
})

export const showBottomTabBar: ActionCreator<ShowBottomTabBarAction> = () => ({
  type: '@bottomTabBar/SHOW'
})
