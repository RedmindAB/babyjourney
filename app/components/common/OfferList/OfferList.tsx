import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {
  OfferListContainer,
  SpecialOffersText,
  TopRowContainer,
  PageDot,
  PageDotContainer
} from './styled'
import SquareButton from '../SquareButton'
import Offer from '../Offer'

class OfferList extends Component {
  render() {
    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff4f4', '#ffbaba']}>
        <OfferListContainer>
          <TopRowContainer>
            <SpecialOffersText>Special Offers</SpecialOffersText>
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
