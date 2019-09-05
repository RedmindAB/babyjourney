import React, { Component } from 'react'
import {
  OfferContainer,
  OfferImage,
  OfferRightContainer,
  OfferTitle,
  OfferText,
  ViewMoreText
} from './styled'

class Offer extends Component {
  render() {
    return (
      <OfferContainer>
        <OfferImage
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vWz7i-_Ew_RnrZjxnM7EDxWsmEFvdCKoDYEYyNUcsMrBIQYX'
          }}
        />
        <OfferRightContainer>
          <OfferTitle>Get 30% off Honest cosmetics</OfferTitle>
          <OfferText>Choose 3 items and get 30% off for the whole purchase.</OfferText>
          <ViewMoreText>View more</ViewMoreText>
        </OfferRightContainer>
      </OfferContainer>
    )
  }
}

export default Offer
