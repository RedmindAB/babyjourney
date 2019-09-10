import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { OfferListContainer, TopRowContainer } from './styled'
import SquareButton from '../SquareButton'
import Offer from '../Offer'
import { Headline } from '../styled'
import theme from '../../../theme'
import PaginatedScrollView from '../PaginatedScrollView'
import { OfferModel } from '../Offer/Offer'
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { screens } from '../../../navigation/navigationConstants'

type Props = NavigationScreenProps

class OfferList extends Component<Props> {
  onPressViewAll = () => this.props.navigation.navigate(screens.OFFERS)
  render() {
    const offerMargin = { marginHorizontal: theme.SCREEN_PADDING }

    const offers: OfferModel[] = [
      {
        imageUri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vWz7i-_Ew_RnrZjxnM7EDxWsmEFvdCKoDYEYyNUcsMrBIQYX',
        title: 'Get 30% off Honest cosmetics',
        category: 'Food',
        body: 'Choose three items and get 30% off for the whole purchase.'
      },
      {
        imageUri:
          'https://images.pexels.com/photos/1556706/pexels-photo-1556706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Get 15% off diapers from BabySafe',
        category: 'Food',
        body: 'Set up a monthly subscripton to get a discount.'
      },
      {
        imageUri:
          'https://img.ppwebstatic.com/origin/product/000101000002/5baded60eb1e2.jpg/950x950',
        title: 'Buy three and get one for free',
        category: 'Food',
        body: 'Buy three baby pyjamas and get one free.'
      }
    ]

    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff4f4', '#ffbaba']}>
        <OfferListContainer>
          <TopRowContainer>
            <Headline noMargin>Special Offers</Headline>
            <SquareButton title="VIEW ALL" onPress={this.onPressViewAll} />
          </TopRowContainer>
          <PaginatedScrollView>
            {offers.map(offer => (
              <Offer key={offer.title} offer={offer} style={offerMargin} />
            ))}
          </PaginatedScrollView>
        </OfferListContainer>
      </LinearGradient>
    )
  }
}

export default withNavigation(OfferList)
