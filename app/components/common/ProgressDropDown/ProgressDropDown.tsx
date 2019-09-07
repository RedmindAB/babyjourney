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
import moment from 'moment'

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

  getDaysUntilDueDate = () => {
    const today = new Date()
    const { dueDate } = this.props.user
    if (today.getMonth() == 11 && today.getDate() > 25) {
      dueDate.setFullYear(dueDate.getFullYear() + 1)
    }
    const oneDay = 1000 * 60 * 60 * 24
    return Math.ceil((dueDate.getTime() - today.getTime()) / oneDay)
  }

  getDayText() {
    return this.getDaysUntilDueDate() > 1 ? 'days' : 'day'
  }

  getWeekDay() {
    const oneDay = 1000 * 60 * 60 * 24
    const oneWeek = oneDay * 7

    const startDate = new Date(this.props.user.dueDate)
    startDate.setDate(startDate.getDate() - 7 * 40)

    const days = Math.round(Math.abs((startDate.getTime() - new Date().getTime()) / oneDay))
    console.log(days)
    const weeks = Math.floor(days / 7)
    const finalDays = days - weeks * 7
    return {
      weeks,
      days: finalDays
    }
  }

  getTrimester() {
    const { weeks, days } = this.getWeekDay()

    if (weeks < 13 || (weeks === 13 && days <= 7)) {
      return 1
    } else if (weeks < 27 || (weeks === 27 && days <= 7)) {
      return 2
    } else {
      return 3
    }
  }

  getPercentage() {
    const remainingDays = this.getDaysUntilDueDate()
    const totalDays = 280
    const percentage = (remainingDays * 100) / totalDays
    return 100 - Math.floor(percentage)
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

    const { weeks, days } = this.getWeekDay()
    return (
      <WhiteBackground>
        <Animated.View style={this.props.animatedStyle}>
          <ProgressDropDownContainer style={[this.props.style, expandedStyle]}>
            <Wrapper style={{ justifyContent: 'space-between', flex: 1 }}>
              <View>
                <Headline noMargin>Your expected day of the birth</Headline>
                <Title style={{ color: 'black' }}>
                  {moment(this.props.user.dueDate).format('LL')}
                </Title>
                <InfoTextContainer>
                  <ProgressInfoText border>
                    You have {this.getDaysUntilDueDate()} {this.getDayText()} remaining
                  </ProgressInfoText>
                  <ProgressInfoText border>week {`${weeks}+${days}`}</ProgressInfoText>
                  <ProgressInfoText>Trimester {this.getTrimester()}</ProgressInfoText>
                </InfoTextContainer>
                <View style={{ position: 'relative', marginTop: 32 }}>
                  <PercentageBarContainer>
                    <PercentageBar style={{ width: `${this.getPercentage()}%` }}>
                      <PercentageBarDot />
                      <PercentageBarLine />
                      <PercentageBarNumberContainer
                        style={
                          {
                            transform: [{ translateX: percentageNumberContainerWidth / 2 - 4 }]
                          } as ViewStyle
                        }
                      >
                        <PercentageText>{this.getPercentage()}%</PercentageText>
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

const mapStateToProps = ({ bottomTabBar, user }: ApplicationState) => ({ bottomTabBar, user })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  hideBottomTabBar: () => dispatch(hideBottomTabBar()),
  showBottomTabBar: () => dispatch(showBottomTabBar())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressDropDown)
