import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import { variables, colors } from '../../../theme'

const width = 200

export default StyleSheet.create({
  container: {
    borderRadius: 14,
    width: 200,
    shadowColor: colors.secondaryOn,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1
  } as ViewStyle,
  image: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: width,
    width
  } as ImageStyle,
  bottomContainer: {
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    padding: variables.BASELINE,
    backgroundColor: colors.secondary
  } as ViewStyle,
  title: {
    fontSize: 16,
    marginBottom: variables.BASELINE
  } as TextStyle,
  author: {
    fontSize: 12
  } as TextStyle
})
