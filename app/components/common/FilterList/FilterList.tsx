import React, { Component } from 'react'
import { View, FlatList, ViewStyle } from 'react-native'
import FilterButton from '../FilterButton'
import theme from '../../../theme'
import i18n from '../../../translations'

type Filter = { value: any; label: string }

type OwnProps = {
  style?: ViewStyle
  translationPath: any
  contentContainerStyle?: ViewStyle
  onPress: (filter: Filter) => void
  filters: Filter[]
  selectedValue: any
}

type Props = OwnProps

class FilterList extends Component<Props> {
  renderItem = ({ item, index }: { item: Filter; index: number }) => {
    const { translationPath, selectedValue, onPress } = this.props
    const style = index === FilterList.length - 1 ? {} : { marginRight: theme.BASELINE }
    return (
      <FilterButton
        label={i18n.t(translationPath[item.value])}
        selectedValue={selectedValue}
        style={style}
        data={item}
        onPress={onPress}
      />
    )
  }

  keyExtractor = (item: Filter) => item.value

  render() {
    return (
      <View style={this.props.style}>
        <FlatList
          keyExtractor={this.keyExtractor}
          contentContainerStyle={[
            {
              paddingHorizontal: theme.SCREEN_PADDING,
              paddingTop: 0
            },
            this.props.contentContainerStyle
          ]}
          data={this.props.filters}
          renderItem={this.renderItem}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    )
  }
}

export default FilterList
