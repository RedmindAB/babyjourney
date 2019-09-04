import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ViewStyle } from 'react-native'
import { SquareButtonContainer, SquareButtonText } from './styled'

type OwnProps = {
  style?: ViewStyle
  onPress: () => void
  title: string
}

type Props = OwnProps

class SquareButton extends Component<Props> {
  render() {
    const { title, onPress, style } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <SquareButtonContainer style={style}>
          <SquareButtonText>{title}</SquareButtonText>
        </SquareButtonContainer>
      </TouchableOpacity>
    )
  }
}

export default SquareButton
