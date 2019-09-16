import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { ViewStyle, View } from 'react-native'
import Offer, { OfferModel } from '../../components/common/Offer/Offer'
import mockOffers from './mockOffers'
import theme from '../../theme'
import BigOffer from '../../components/common/BigOffer'
import FilterList from '../../components/common/FilterList'
import { Filter } from '../../types'
import { lang } from '../../translations'

type State = {
  filters: Filter[]
  activeFilter: Filter
  filteredOffers: OfferModel[]
}

class Offers extends Component<{}, State> {
  constructor(props) {
    super(props)
    const filters = this.getFilters()
    const [activeFilter] = filters
    this.state = { filters, activeFilter, filteredOffers: this.getFilteredOffers(activeFilter) }
  }
  getFilters = (): Filter[] => {
    const filters = mockOffers
      .filter(offer => offer.category.length > 0)
      .reduce((acc, curr) => {
        const category = {
          value: curr.category.toLowerCase(),
          label: curr.category
        }
        if (acc.every(cat => cat.value !== category.value)) {
          acc.push(category)
        }
        return acc
      }, [])

    filters.unshift({
      label: 'All',
      value: 'all'
    })

    return filters
  }

  setFilter = (filter: Filter) => {
    const filteredOffers = this.getFilteredOffers(filter)
    this.setState({ activeFilter: filter, filteredOffers })
  }

  getFilteredOffers(filter: Filter) {
    return filter.value === 'all'
      ? mockOffers
      : mockOffers.filter(article => article.category.toLowerCase() === filter.value)
  }

  renderOffers() {
    return this.state.filteredOffers.map((offer, index) => {
      if (index === 0) {
        return <BigOffer key={index.toString()} offer={offer} />
      }
      const style: ViewStyle = { marginTop: theme.BASELINE * 1.5 }
      style.shadowColor = '#7e728a'
      style.shadowOpacity = 0.2
      return <Offer key={index.toString()} style={style} offer={offer} />
    })
  }

  render() {
    return (
      <Container style={{ paddingTop: theme.BASELINE * 2 }} withoutMargin>
        <FilterList
          translationPath={lang.offers.categories}
          contentContainerStyle={{ padding: theme.SCREEN_PADDING }}
          onPress={this.setFilter}
          selectedValue={this.state.activeFilter.value}
          filters={this.state.filters}
        />
        <View style={{ alignItems: 'center', paddingBottom: theme.SCREEN_PADDING }}>
          {this.renderOffers()}
        </View>
      </Container>
    )
  }
}

export default Offers
