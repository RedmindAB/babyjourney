import React, { Component } from 'react'
import { OfferModel } from '../Offer/Offer'
import { BigOfferContainer, BigOfferImage, BigOfferBottomContainer, BigOfferTitle } from './styled'
import { InfoText } from '../styled'

type OwnProps = {
  offer: OfferModel
}

type Props = OwnProps

class BigOffer extends Component<Props> {
  render() {
    const { body, image, title } = this.props.offer
    return (
      <BigOfferContainer>
        <BigOfferImage source={image} />
        <BigOfferBottomContainer>
          <BigOfferTitle>{title}</BigOfferTitle>
          <InfoText>{body}</InfoText>
        </BigOfferBottomContainer>
      </BigOfferContainer>
    )
  }
}
export default BigOffer
