import { StyleSheet } from 'react-native'
import theme from '../../../theme'

export const basePadding = theme.BASELINE * 3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.secondary.color
  },
  contentContainer: {
    padding: basePadding,
    flexGrow: 1
  }
})

export default styles
