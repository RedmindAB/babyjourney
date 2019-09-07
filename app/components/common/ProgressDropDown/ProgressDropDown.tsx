import React, { Component } from 'react'
import { Dispatch } from 'redux'
import {
  View,
  ViewStyle,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Animated
} from 'react-native'
import { connect } from 'react-redux'

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
  BabyInfoTitle,
  WhiteBackground
} from './styled'
import { Headline, Title, InfoText } from '../styled'
import { Icons } from '../../../assets'
import SquareButton from '../SquareButton'
import theme from '../../../theme'
import { ApplicationState } from '../../../store'
import { hideBottomTabBar, showBottomTabBar } from '../../../store/bottomTabBar/actions'
import { getBottomScreenSpace } from '../../../theme/variables'

const { height } = Dimensions.get('screen')

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type OwnProps = {
  style?: ViewStyle
  animatedStyle?: any
  onExpand?: () => void
}

type Props = OwnProps & PropsFromDispatch & PropsFromState

type State = {
  expanded: boolean
}

class ProgressDropDown extends Component<Props, State> {
  state = {
    expanded: false
  }

  toggleExpanded = () => {
    const expanded = !this.state.expanded
    if (expanded) {
      this.props.hideBottomTabBar()
      if (this.props.onExpand) {
        this.props.onExpand()
      }
    } else {
      this.props.showBottomTabBar()
    }
    this.setState({ expanded })
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
    const { expanded } = this.state
    const expandedStyle: ViewStyle = {}
    let expandButtonMargin = expanded
      ? getBottomScreenSpace() || theme.BASELINE * 1.5
      : theme.BASELINE * 1.5

    if (expanded) {
      expandedStyle.height = height
    }

    const Wrapper = expanded ? SafeAreaView : View
    return (
      <WhiteBackground>
        <Animated.View style={this.props.animatedStyle}>
          <ProgressDropDownContainer style={[this.props.style, expandedStyle]}>
            <Wrapper style={{ justifyContent: 'space-between', flex: 1 }}>
              <View>
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
              </View>
              <TouchableOpacity onPress={this.toggleExpanded}>
                <ExpandButton style={{ marginBottom: expandButtonMargin }}>
                  <ExpandButtonText>Details</ExpandButtonText>
                  <Icons.DarkArrow
                    style={
                      {
                        transform: [{ rotate: this.state.expanded ? '180deg' : '0deg' }]
                      } as ViewStyle
                    }
                  />
                </ExpandButton>
              </TouchableOpacity>
            </Wrapper>
          </ProgressDropDownContainer>
        </Animated.View>
      </WhiteBackground>
    )
  }
}

const mapStateToProps = ({ bottomTabBar }: ApplicationState) => ({ bottomTabBar })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  hideBottomTabBar: () => dispatch(hideBottomTabBar()),
  showBottomTabBar: () => dispatch(showBottomTabBar())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressDropDown)
