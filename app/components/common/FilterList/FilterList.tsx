import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import FilterButton from '../FilterButton'
import theme from '../../../theme'

type Filter = { value: any; label: string }

type OwnProps = {
  onPress: (filter: Filter) => void
  filters: Filter[]
  selectedValue: any
}

type Props = OwnProps

class FilterList extends Component<Props> {
  renderItem = ({ item, index }: { item: Filter; index: number }) => {
    const style = index === FilterList.length - 1 ? {} : { marginRight: theme.BASELINE }
    return (
      <FilterButton
        selectedValue={this.props.selectedValue}
        style={style}
        data={item}
        onPress={this.props.onPress}
      />
    )
  }

  keyExtractor = (item: Filter) => item.value

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={this.keyExtractor}
          contentContainerStyle={{
            paddingHorizontal: theme.BASELINE * 2,
            paddingTop: 0
          }}
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
