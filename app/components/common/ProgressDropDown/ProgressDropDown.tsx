import React, { Component } from 'react'
import { View, ViewStyle } from 'react-native'
import {
  ProgressDropDownContainer,
  InfoTextContainer,
  ProgressInfoText,
  PercentageBarContainer,
  PercentageBar,
  BabyLogo,
  BabyLogoWhiteBorder,
  ExpandButton,
  ExpandButtonText,
  PercentageBarDot,
  PercentageBarLine,
  PercentageBarNumberContainer,
  percentageNumberContainerWidth,
  PercentageText
} from './styled'
import { Headline, Title } from '../styled'
import { Icons } from '../../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

type OwnProps = {
  style?: ViewStyle
}

type Props = OwnProps

class ProgressDropDown extends Component<Props> {
  render() {
    return (
      <View style={{ backgroundColor: 'white', zIndex: 1 }}>
        <ProgressDropDownContainer style={this.props.style}>
          <Headline noMargin>Your expected day of the birth</Headline>
          <Title style={{ color: 'black' }}>January 15, 2019</Title>
          <InfoTextContainer>
            <ProgressInfoText border>You have 45 days remaining</ProgressInfoText>
            <ProgressInfoText border>week 13+5</ProgressInfoText>
            <ProgressInfoText>Trimester 3</ProgressInfoText>
          </InfoTextContainer>
          <View style={{ position: 'relative', marginTop: 32 }}>
            <PercentageBarContainer>
              <PercentageBar>
                <PercentageBarDot />
                <PercentageBarLine />
                <PercentageBarNumberContainer
                  style={
                    {
                      transform: [{ translateX: percentageNumberContainerWidth / 2 - 4 }]
                    } as ViewStyle
                  }
                >
                  <PercentageText>55%</PercentageText>
                </PercentageBarNumberContainer>
              </PercentageBar>
            </PercentageBarContainer>
            <BabyLogoWhiteBorder>
              <BabyLogo>
                <Icons.Baby />
              </BabyLogo>
            </BabyLogoWhiteBorder>
          </View>
          <TouchableOpacity>
            <ExpandButton>
              <ExpandButtonText>Details</ExpandButtonText>
              <Icons.DarkArrow />
            </ExpandButton>
          </TouchableOpacity>
        </ProgressDropDownContainer>
      </View>
    )
  }
}

export default ProgressDropDown
