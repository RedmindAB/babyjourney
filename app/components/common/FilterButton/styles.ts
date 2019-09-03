import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { variables, colors } from '../../../theme'

const height = variables.BASELINE * 4

export default StyleSheet.create({
  container: {
    height,
    minWidth: variables.BASELINE * 10,
    borderRadius: height / 2,
    backgroundColor: colors.accentDark,
    paddingHorizontal: variables.BASELINE * 2,
    borderWidth: 1,
    borderColor: colors.accentDark,
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle,
  title: {
    fontSize: 14,
    color: colors.accentDarkOn
  } as TextStyle
})
