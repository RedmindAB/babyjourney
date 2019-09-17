import React, { Component } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { GradientSwitchContainer } from './styled'
import LinearGradient from 'react-native-linear-gradient'
import theme from '../../../theme'
import { InfoText } from '../styled'

type Option = {
  label: string
  value: any
}

type OwnProps = {
  style?: ViewStyle
  onPress: (value: string) => void
  selectedValue: string
  options: Option[]
}

type Props = OwnProps

class GradientSwitch extends Component<Props> {
  renderOptions() {
    const { options, selectedValue } = this.props
    return options.map((option, index) => {
      const onPress = () => this.props.onPress(option.value)
      const colors =
        selectedValue === option.value ? ['#ff8888', '#ffd294'] : ['transparent', 'transparent']
      return (
        <TouchableOpacity
          key={option.value}
          style={{
            flex: index === 0 ? 1 : 0
          }}
          onPress={onPress}
        >
          <LinearGradient
            style={{
              flex: index === 0 ? 1 : 0,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 999,
              paddingVertical: theme.BASELINE / 2,
              paddingHorizontal: theme.BASELINE * 2
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={colors}
          >
            <InfoText style={{ fontSize: 13 }} numberOfLines={1} normal>
              {option.label}
            </InfoText>
          </LinearGradient>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <GradientSwitchContainer style={this.props.style}>
        {this.renderOptions()}
      </GradientSwitchContainer>
    )
  }
}

export default GradientSwitch
