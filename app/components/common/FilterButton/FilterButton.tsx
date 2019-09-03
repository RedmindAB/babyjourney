import React, { Component } from 'react'
import { TouchableOpacity, View, Text, ViewStyle } from 'react-native'
import styles from './styles'
import { colors } from '../../../theme'

type OwnProps = {
  style?: ViewStyle
  data: { label: string; value: any }
  selectedValue: any
  onPress: (data: any) => void
}

type Props = OwnProps

class FilterButton extends Component<Props> {
  onPress = () => this.props.onPress(this.props.data)

  render() {
    const { data, onPress, style, selectedValue } = this.props
    const selectedStyles =
      selectedValue === data.value
        ? {}
        : ({
            backgroundColor: colors.secondary
          } as ViewStyle)
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={[styles.container, selectedStyles, style]}>
          <Text style={styles.title}>{data.label}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default FilterButton
