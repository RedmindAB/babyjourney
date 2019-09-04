import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import theme from '../../../theme'
const height = theme.BASELINE * 4

export default StyleSheet.create({
  container: {
    height,
    borderRadius: height / 2,
    backgroundColor: theme.accent,
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle,
  title: {
    color: theme.accentOn,
    fontSize: 14
  } as TextStyle
})
