import {StyleSheet} from 'react-native'

import {variables, colors} from '../../../theme'

export const basePadding = variables.BASELINE * 3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  contentContainer: {
    padding: basePadding,
    flexGrow: 1,
  },
})

export default styles
