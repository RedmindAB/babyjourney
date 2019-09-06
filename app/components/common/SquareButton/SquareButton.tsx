import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ViewStyle, TextStyle } from 'react-native'
import { SquareButtonContainer, SquareButtonText } from './styled'

type OwnProps = {
  style?: ViewStyle
  textStyle?: TextStyle
  onPress: () => void
  title: string
}

type Props = OwnProps

class SquareButton extends Component<Props> {
  render() {
    const { title, onPress, style, textStyle } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <SquareButtonContainer style={style}>
          <SquareButtonText style={textStyle}>{title}</SquareButtonText>
        </SquareButtonContainer>
      </TouchableOpacity>
    )
  }
}

export default SquareButton
