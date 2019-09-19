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
import i18n, { lang } from '../../../translations'
import { babyBjorn, tableChair, babyCarChair } from '../../../assets/images'

type Props = NavigationScreenProps

class OfferList extends Component<Props> {
  onPressViewAll = () => this.props.navigation.navigate(screens.OFFERS)
  render() {
    const offerMargin = { marginHorizontal: theme.SCREEN_PADDING }

    const offers: OfferModel[] = [
      {
        image: babyBjorn,
        title: i18n.t(lang.offers.offerList.babyBjorn.title),
        body: i18n.t(lang.offers.offerList.babyBjorn.body),
        category: i18n.t(lang.offers.offerList.babyBjorn.category)
      },
      {
        image: tableChair,
        title: i18n.t(lang.offers.offerList.tableChair.title),
        body: i18n.t(lang.offers.offerList.tableChair.body),
        category: i18n.t(lang.offers.offerList.tableChair.category)
      },
      {
        image: babyCarChair,
        title: i18n.t(lang.offers.offerList.carChair.title),
        body: i18n.t(lang.offers.offerList.carChair.body),
        category: i18n.t(lang.offers.offerList.carChair.category)
      }
    ]

    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff4f4', '#ffbaba']}>
        <OfferListContainer>
          <TopRowContainer>
            <Headline noMargin>{i18n.t(lang.offerWidget.title)}</Headline>
            <SquareButton
              title={i18n.t(lang.offerWidget.viewAllButton)}
              onPress={this.onPressViewAll}
            />
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
