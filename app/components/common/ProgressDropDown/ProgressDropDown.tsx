import React, { Component } from 'react'
import { Dispatch } from 'redux'
import {
  View,
  ViewStyle,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'

import {
  ProgressDropDownContainer,
  InfoTextContainer,
  ProgressInfoText,
  ExpandButton,
  ExpandButtonText,
  BottomContainer,
  BabyComparisonContainer,
  BabyInfoContainer,
  BabyInfoText,
  BabyInfoTitle,
  WhiteBackground,
  InfoRow
} from './styled'
import { Headline, Title, InfoText } from '../styled'
import { Icons } from '../../../assets'
import theme from '../../../theme'
import { ApplicationState } from '../../../store'
import { hideBottomTabBar, showBottomTabBar } from '../../../store/bottomTabBar/actions'
import { getBottomScreenSpace } from '../../../theme/variables'
import moment from 'moment'
import {
  getWeekAndDay,
  getDaysUntilDueDate,
  getTrimester,
  getDaysPassed,
  getCalenderMonth,
  getPregnancyMonths
} from '../../../utils'
import BabyPercentage from '../BabyPercentage'
import i18n, { lang } from '../../../translations'

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
    const daysPassed = getDaysPassed(this.props.user.dueDate)
    return (
      <BottomContainer>
        <InfoText style={{ textAlign: 'center', fontSize: 14 }}>
          {i18n.t(lang.progressDisplay.baySizeText, {
            babySize: i18n.t(lang.progressDisplay.babySizes.lemon)
          })}
        </InfoText>
        <BabyComparisonContainer>
          <Image
            style={{
              width: 75,
              height: 75,
              marginLeft: 8,
              marginBottom: 8
            }}
            source={require('../../../assets/images/lemon.png')}
          />
        </BabyComparisonContainer>
        <BabyInfoContainer>
          <InfoRow>
            <BabyInfoTitle>{i18n.t(lang.progressDisplay.daysPassed)}</BabyInfoTitle>
            <BabyInfoText>{i18n.t(lang.progressDisplay.totalDays, { daysPassed })}</BabyInfoText>
          </InfoRow>
          <InfoRow>
            <BabyInfoTitle>{i18n.t(lang.progressDisplay.calenderMonth)}</BabyInfoTitle>
            <BabyInfoText>{getCalenderMonth(this.props.user.dueDate)}</BabyInfoText>
          </InfoRow>
          <InfoRow>
            <BabyInfoTitle>{i18n.t(lang.progressDisplay.pregnancyMonth)}</BabyInfoTitle>
            <BabyInfoText>{getPregnancyMonths(this.props.user.dueDate)}</BabyInfoText>
          </InfoRow>
          <InfoText
            style={{
              fontSize: 13,
              color: '#6e6578',
              lineHeight: 17,
              marginTop: theme.BASELINE * 2
            }}
          >
            {i18n.t(lang.progressDisplay.infoText)}
          </InfoText>
        </BabyInfoContainer>
      </BottomContainer>
    )
  }

  getDayText() {
    return getDaysUntilDueDate(this.props.user.dueDate) != 1
      ? i18n.t(lang.progressDisplay.days)
      : i18n.t(lang.progressDisplay.day)
  }

  render() {
    const { expanded } = this.state
    const { dueDate } = this.props.user
    const expandedStyle: ViewStyle = {}
    let expandButtonMargin = expanded
      ? getBottomScreenSpace() || theme.BASELINE * 1.5
      : theme.BASELINE * 1.5

    if (expanded) {
      expandedStyle.height = height
    }

    const Wrapper = expanded ? SafeAreaView : View

    const { weeks, days } = getWeekAndDay(dueDate)
    const dayText = this.getDayText()
    const daysLeft = getDaysUntilDueDate(dueDate)
    const trimester = getTrimester(dueDate)

    return (
      <WhiteBackground>
        <Animated.View style={this.props.animatedStyle}>
          <ProgressDropDownContainer expanded={expanded} style={[this.props.style, expandedStyle]}>
            <ScrollView
              bounces={false}
              style={{ backgroundColor: 'transparent', overflow: 'visible' }}
              contentContainerStyle={{ flex: 1 }}
            >
              <Wrapper style={{ justifyContent: 'space-between', flex: 1 }}>
                <View>
                  <Headline noMargin>{i18n.t(lang.progressDisplay.title)}</Headline>
                  <Title style={{ color: 'black' }}>
                    {moment(this.props.user.dueDate)
                      .locale(i18n.currentLocale())
                      .format('LL')}
                  </Title>
                  <InfoTextContainer>
                    <ProgressInfoText border>
                      {i18n.t(lang.progressDisplay.daysLeft, { daysLeft, dayText })}
                    </ProgressInfoText>
                    <ProgressInfoText border>
                      {i18n.t(lang.progressDisplay.weekText, { weeks, days })}{' '}
                    </ProgressInfoText>
                    <ProgressInfoText>
                      {i18n.t(lang.progressDisplay.trimesterText, { trimester })}
                    </ProgressInfoText>
                  </InfoTextContainer>
                  <View style={{ position: 'relative', marginTop: 32 }}>
                    <BabyPercentage />
                  </View>
                  {this.state.expanded && this.renderBottomPart()}
                </View>
                <TouchableOpacity onPress={this.toggleExpanded}>
                  <ExpandButton style={{ marginVertical: expandButtonMargin }}>
                    <ExpandButtonText>{i18n.t(lang.progressDisplay.expandButton)}</ExpandButtonText>
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
            </ScrollView>
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
