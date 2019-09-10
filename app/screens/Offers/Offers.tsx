import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { ViewStyle } from 'react-native'
import { CenteredFill } from '../../components/common/styled'
import Offer from '../../components/common/Offer/Offer'
import mockOffers from './mockOffers'
import theme from '../../theme'

class Offers extends Component {
  renderOffers() {
    return mockOffers.map((offer, index) => {
      const style: ViewStyle = index > 0 ? { marginTop: theme.BASELINE * 2 } : {}
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
