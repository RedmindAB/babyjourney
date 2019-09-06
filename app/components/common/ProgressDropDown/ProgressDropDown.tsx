import React, { Component } from 'react'
import { View, ViewStyle, Text, Image, Animated } from 'react-native'
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
  PercentageText,
  BottomContainer,
  BabyComparisonContainer,
  BabyInfoContainer,
  BabyInfoText,
  BabyInfoTitle
} from './styled'
import { Headline, Title, InfoText } from '../styled'
import { Icons } from '../../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SquareButton from '../SquareButton'
import theme from '../../../theme'

type OwnProps = {
  style?: ViewStyle
}

type Props = OwnProps

type State = {
  expanded: boolean
}

class ProgressDropDown extends Component<Props, State> {
  state = {
    expanded: true
  }

  renderBottomPart = () => {
    return (
      <BottomContainer>
        <InfoText style={{ textAlign: 'center', fontSize: 14 }}>
          Your baby is as big as a lemon now
        </InfoText>
        <BabyComparisonContainer>
          <Image
            style={{ width: 75, height: 75, marginLeft: 8, marginBottom: 8 }}
            source={require('../../../assets/images/lemon.png')}
          />
        </BabyComparisonContainer>
        <Headline noMargin>weight</Headline>
        <BabyInfoContainer>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ flex: 1 }}>
              <BabyInfoTitle>start</BabyInfoTitle>
              <BabyInfoText>55 kg</BabyInfoText>
            </View>
            <View style={{ flex: 1 }}>
              <BabyInfoTitle>YOUR CURRENT</BabyInfoTitle>
              <BabyInfoText>57 kg</BabyInfoText>
            </View>
            <View style={{ flex: 1 }}>
              <BabyInfoTitle>BABY</BabyInfoTitle>
              <BabyInfoText>50 gms</BabyInfoText>
            </View>
          </View>
          <SquareButton
            style={{
              backgroundColor: 'white',
              alignSelf: 'baseline',
              marginTop: theme.BASELINE * 2
            }}
            textStyle={{ color: '#584f60' }}
            title="TRACK"
            onPress={() => undefined}
          />
        </BabyInfoContainer>
      </BottomContainer>
    )
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', zIndex: 1 }}>
        <ProgressDropDownContainer style={[this.props.style]}>
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
          {this.state.expanded && this.renderBottomPart()}
          <TouchableOpacity>
            <ExpandButton>
              <ExpandButtonText>Details</ExpandButtonText>
              <Icons.DarkArrow
                style={
                  { transform: [{ rotate: this.state.expanded ? '180deg' : '0deg' }] } as ViewStyle
                }
              />
            </ExpandButton>
          </TouchableOpacity>
        </ProgressDropDownContainer>
      </View>
    )
  }
}

export default ProgressDropDown
