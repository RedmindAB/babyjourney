import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { OfferListContainer, TopRowContainer } from './styled'
import SquareButton from '../SquareButton'
import Offer from '../Offer'
import { Headline } from '../styled'
import theme from '../../../theme'
import { Dimensions } from 'react-native'
import PaginatedScrollView from '../PaginatedScrollView'

const { width } = Dimensions.get('screen')
class OfferList extends Component {
  render() {
    const offerMargin = { marginHorizontal: theme.SCREEN_PADDING }

    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff4f4', '#ffbaba']}>
        <OfferListContainer>
          <TopRowContainer>
            <Headline noMargin>Special Offers</Headline>
            <SquareButton title="VIEW ALL" onPress={() => undefined} />
          </TopRowContainer>
          <PaginatedScrollView>
            <Offer style={offerMargin} />
            <Offer style={offerMargin} />
            <Offer style={offerMargin} />
          </PaginatedScrollView>
        </OfferListContainer>
      </LinearGradient>
    )
  }
}

export default OfferList
