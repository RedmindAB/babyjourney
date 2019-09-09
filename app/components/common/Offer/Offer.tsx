import React, { Component } from 'react'
import { OfferContainer, OfferImage, OfferRightContainer, OfferTitle, ViewMoreText } from './styled'
import { ViewStyle } from 'react-native'
import { InfoText } from '../styled'

export type OfferModel = {
  imageUri: string
  title: string
  body: string
}

type OwnProps = {
  style?: ViewStyle
  offer: OfferModel
}

type Props = OwnProps

class Offer extends Component<Props> {
  render() {
    const { offer } = this.props
    return (
      <OfferContainer style={this.props.style}>
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
