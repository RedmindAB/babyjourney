import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import theme from '../../../theme'
const height = theme.BASELINE * 4

export default StyleSheet.create({
  container: {
    height,
    borderRadius: height / 2,
    backgroundColor: theme.tertiary_variant.color,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.BASELINE * 2
  } as ViewStyle,
  title: {
    color: '#4a4152',
    fontSize: 14
  } as TextStyle
})
