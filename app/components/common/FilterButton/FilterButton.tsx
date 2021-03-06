import React, { Component } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { FilterButtonText, FilterButtonContainer } from './styled'

type OwnProps = {
  style?: ViewStyle
  label: string
  data: { label: string; value: any }
  selectedValue: any
  onPress: (data: any) => void
}

type Props = OwnProps

class FilterButton extends Component<Props> {
  onPress = () => this.props.onPress(this.props.data)

  render() {
    const { data, style, selectedValue, label } = this.props
    const selected = selectedValue === data.value
    return (
      <TouchableOpacity onPress={this.onPress}>
        <FilterButtonContainer selected={selected} style={style}>
          <FilterButtonText>{label}</FilterButtonText>
        </FilterButtonContainer>
      </TouchableOpacity>
    )
  }
}

export default FilterButton
