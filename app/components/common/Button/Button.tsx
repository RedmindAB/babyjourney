import React, { Component } from 'react'
import { TouchableOpacity, View, Text, ViewStyle } from 'react-native'
import styles from './styles'

type OwnProps = {
  style?: ViewStyle
  title: string
  onPress: () => void
}

type Props = OwnProps

class Button extends Component<Props> {
  render() {
    const { title, onPress, style } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, style]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Button
