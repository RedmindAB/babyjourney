import { Dimensions, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { getBottomSpace } from 'react-native-iphone-x-helper'
export const borderRadius = 24

export const lightOpacity = 0.6
export const animationDurations = {
  veryFast: 150,
  fast: 200,
  medium: 300,
  slow: 400,
  verySlow: 500
}
const boxShadowDefault = {
  shadowColor: 'rgba(9, 16, 95, 0.24)',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 1
}
export const boxShadowLarge = {
  shadowColor: 'rgba(9, 16, 95, 0.4)',
  ...boxShadowDefault,
  shadowRadius: 8,
  elevation: 8
}
export const boxShadowMedium = {
  ...boxShadowDefault,
  shadowRadius: 4,
  elevation: 4
}
export const headerHeight = 40

const { height, width } = Dimensions.get('screen')
const isSmallDevice = width < 340
const statusBarHeight = Platform.select({
  android: 0,
  ios: getStatusBarHeight()
})
export const layout = {
  height,
  width,
  isSmallDevice,
  headerHeight: 40 + statusBarHeight,
  statusBarHeight
}

export const BASELINE = 8
export const SCREEN_PADDING = BASELINE * 1.5

export const screenContainerPadding = BASELINE * 2.5
export const getBottomScreenSpace = () => getBottomSpace() || BASELINE * 2
