import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { SwitchListContainer, OptionContainer, OptionText } from './styled'
import i18n, { lang } from '../../../translations'

type OwnProps = {
  options: string[]
  selectedIndex: number
  onPress: (index: number) => void
}

type Props = OwnProps

class SwitchList extends Component<Props> {
  renderOptions = () => {
    return this.props.options.map((option, index) => {
      const onPress = () => this.props.onPress(index)
      return (
        <TouchableOpacity style={{ flex: 1 }} key={option} onPress={onPress}>
          <OptionContainer selected={this.props.selectedIndex === index}>
            <OptionText>{i18n.t(lang.whatHappenaNowScreen[option.toLowerCase()])}</OptionText>
          </OptionContainer>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return <SwitchListContainer>{this.renderOptions()}</SwitchListContainer>
  }
}

export default SwitchList
