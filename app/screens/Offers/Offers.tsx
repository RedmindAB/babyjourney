import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { ViewStyle } from 'react-native'
import { CenteredFill } from '../../components/common/styled'
import Offer from '../../components/common/Offer/Offer'
import mockOffers from './mockOffers'
import theme from '../../theme'
import BigOffer from '../../components/common/BigOffer'

class Offers extends Component {
  renderOffers() {
    return mockOffers.map((offer, index) => {
      if (index === 0) {
        return <BigOffer offer={offer} />
      }
      const style: ViewStyle = { marginTop: theme.BASELINE * 1.5 }
      style.shadowColor = '#7e728a'
      style.shadowOpacity = 0.2
      return <Offer style={style} offer={offer} />
    })
  }
  render() {
    return (
      <Container weekHeader>
        <CenteredFill>{this.renderOffers()}</CenteredFill>
      </Container>
    )
  }
}

export default Offers
