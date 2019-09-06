import React, { Component } from 'react'
import { OfferContainer, OfferImage, OfferRightContainer, OfferTitle, ViewMoreText } from './styled'
import { ViewStyle } from 'react-native'
import { InfoText } from '../styled'

type OwnProps = {
  style?: ViewStyle
}

type Props = OwnProps

class Offer extends Component<Props> {
  render() {
    return (
      <OfferContainer style={this.props.style}>
        <OfferImage
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vWz7i-_Ew_RnrZjxnM7EDxWsmEFvdCKoDYEYyNUcsMrBIQYX'
          }}
        />
        <OfferRightContainer>
          <OfferTitle>Get 30% off Honest cosmetics</OfferTitle>
          <InfoText light>Choose 3 items and get 30% off for the whole purchase.</InfoText>
          <ViewMoreText>View more</ViewMoreText>
        </OfferRightContainer>
      </OfferContainer>
    )
  }
}

export default Offer
