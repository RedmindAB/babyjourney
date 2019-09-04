import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { OfferListContainer, TopRowContainer, PageDot, PageDotContainer } from './styled'
import SquareButton from '../SquareButton'
import Offer from '../Offer'
import { Headline } from '../styled'

class OfferList extends Component {
  render() {
    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff4f4', '#ffbaba']}>
        <OfferListContainer>
          <TopRowContainer>
            <Headline noMargin>Special Offers</Headline>
            <SquareButton title="VIEW ALL" onPress={() => undefined} />
          </TopRowContainer>
          <Offer />
          <PageDotContainer>
            <PageDot />
            <PageDot />
            <PageDot active last />
          </PageDotContainer>
        </OfferListContainer>
      </LinearGradient>
    )
  }
}

export default OfferList
