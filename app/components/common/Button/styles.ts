import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { variables, colors } from '../../../theme'

const height = variables.BASELINE * 4

export default StyleSheet.create({
  container: {
    height,
    borderRadius: height / 2,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle,
  title: {
    color: colors.accentOn,
    fontSize: 14
  } as TextStyle
})
