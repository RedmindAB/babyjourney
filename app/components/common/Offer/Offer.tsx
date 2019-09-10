import React, { Component } from 'react'
import { OfferContainer, OfferImage, OfferRightContainer, OfferTitle, ViewMoreText } from './styled'
import { ViewProps } from 'react-native'
import { InfoText } from '../styled'

export type OfferModel = {
  imageUri: string
  title: string
  body: string
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
        <OfferImage
          source={{
            uri: offer.imageUri
          }}
        />
        <OfferRightContainer>
          <OfferTitle>{offer.title}</OfferTitle>
          <InfoText light>{offer.body}</InfoText>
          <ViewMoreText>View more</ViewMoreText>
        </OfferRightContainer>
      </OfferContainer>
    )
  }
}

export default Offer
