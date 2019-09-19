import React, { Component } from 'react'
import { OfferContainer, OfferImage, OfferRightContainer, OfferTitle, ViewMoreText } from './styled'
import { ViewProps } from 'react-native'
import { InfoText } from '../styled'

export type OfferModel = {
  image: any
  title: string
  body: string
  category: string
}

type OwnProps = {
  offer: OfferModel
}

type Props = OwnProps & ViewProps

class Offer extends Component<Props> {
  render() {
    const { offer, ...viewProps } = this.props

    return (
      <OfferContainer {...viewProps}>
        <OfferImage resizeMode="contain" source={offer.image} />
        <OfferRightContainer>
          <OfferTitle>{offer.title}</OfferTitle>
          <InfoText style={{ fontSize: 13 }} light>
            {offer.body}
          </InfoText>
        </OfferRightContainer>
      </OfferContainer>
    )
  }
}

export default Offer
