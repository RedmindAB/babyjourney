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
  One,
  Two
} from './styled'
import { Headline, Title, InfoText } from '../styled'
import { Icons } from '../../../assets'
import SquareButton from '../SquareButton'
import theme from '../../../theme'
import { ApplicationState } from '../../../store'
import { hideBottomTabBar, showBottomTabBar } from '../../../store/bottomTabBar/actions'
import { getBottomScreenSpace } from '../../../theme/variables'
import moment from 'moment'
import { getWeekAndDay, getDaysUntilDueDate, getTrimester } from '../../../utils'
import BabyPercentage from '../BabyPercentage'

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
            style={{
              width: 75,
              height: 75,
              marginLeft: 8,
              marginBottom: 8
            }}
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

  getDayText() {
    return getDaysUntilDueDate(this.props.user.dueDate) > 1 ? 'days' : 'day'
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
                  <Headline noMargin>Your expected day of the birth</Headline>
                  <Title style={{ color: 'black' }}>
                    {moment(this.props.user.dueDate).format('LL')}
                  </Title>
                  <InfoTextContainer>
                    <ProgressInfoText border>
                      You have {daysLeft} {dayText} remaining
                    </ProgressInfoText>
                    <ProgressInfoText border>week {`${weeks}+${days}`}</ProgressInfoText>
                    <ProgressInfoText>Trimester {trimester}</ProgressInfoText>
                  </InfoTextContainer>
                  <View style={{ position: 'relative', marginTop: 32 }}>
                    <BabyPercentage />
                  </View>
                  {this.state.expanded && this.renderBottomPart()}
                </View>
                <TouchableOpacity onPress={this.toggleExpanded}>
                  <ExpandButton style={{ marginVertical: expandButtonMargin }}>
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
