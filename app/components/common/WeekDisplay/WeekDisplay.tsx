import React, { Component } from 'react'
import { ScrollView, TouchableWithoutFeedback, Dimensions, ViewStyle, View } from 'react-native'
import {
  WeekDisplayContainer,
  WeekSelectionContainer,
  WeekDot,
  WeekNumberContainer,
  WeekNumber,
  WeekDotLine,
  LineContainer,
  weekDotLineWidth
} from './styled'
import { Headline, InfoText } from '../styled'
import { ApplicationState } from '../../../store'
import { connect } from 'react-redux'
import { getWeekAndDay } from '../../../utils'
import { Dispatch } from 'redux'
import { selectWeek } from '../../../store/user/actions'
import i18n, { lang } from '../../../translations'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type OwnProps = {
  style?: ViewStyle
}

type Props = OwnProps & PropsFromState & PropsFromDispatch

type State = {
  weekAmount: number
  weeks: number[]
}

const { width } = Dimensions.get('screen')

class WeekDisplay extends Component<Props, State> {
  scrollView = React.createRef<ScrollView>()

  state: State = {
    weekAmount: 42,
    weeks: []
  }

  componentDidMount() {
    const weeks = []
    for (let i = 1; i <= this.state.weekAmount; i++) {
      weeks.push(i)
    }

    this.setState({ weeks }, () => {
      setTimeout(() => {
        this.scrollToWeek(getWeekAndDay(this.props.user.dueDate).weeks)
      }, 0)
    })
  }

  scrollToWeek = (week: number) => {
    const scrollX = weekDotLineWidth * 2 * week - weekDotLineWidth - width / 2
    this.scrollView.current.scrollTo({ x: scrollX, animated: false })
  }

  selectWeek = (index: number) => {
    this.props.selectWeek(this.state.weeks[index])
  }

  renderWeeks = () => {
    const { dueDate, selectedWeek } = this.props.user
    const { weeks, days } = getWeekAndDay(dueDate)
    const currentWeek = weeks

    return this.state.weeks.map((n: number, index: number) => {
      const text = n === currentWeek ? `${n}+${days}` : n
      const onPress = () => this.selectWeek(index)
      const dotGray = n > currentWeek
      const leftGray = n > currentWeek
      const rightGray = n >= currentWeek
      const thinLeft = n > currentWeek && n > selectedWeek
      const thinRight = n >= currentWeek && n >= selectedWeek
      const isCurrentWeek = n === currentWeek
      const isSelectedWeek = n === selectedWeek
      const showCenterDot = n === currentWeek || n === selectedWeek
      return (
        <TouchableWithoutFeedback key={n.toString()} onPress={onPress}>
          <WeekNumberContainer>
            <LineContainer>
              <WeekDotLine gray={leftGray} thin={thinLeft} style={{ right: 0 }} />
              <WeekDotLine gray={rightGray} thin={thinRight} style={{ left: 0 }} />
            </LineContainer>
            <WeekDot
              selected={isCurrentWeek || isSelectedWeek}
              gray={dotGray}
              white={isSelectedWeek && !isCurrentWeek}
              border={isSelectedWeek && !isCurrentWeek}
            >
              {showCenterDot && <WeekDot white={isCurrentWeek} gray={dotGray} />}
            </WeekDot>
            <WeekNumber highLight={isSelectedWeek || isCurrentWeek}>{text}</WeekNumber>
          </WeekNumberContainer>
        </TouchableWithoutFeedback>
      )
    })
  }

  render() {
    return (
      <WeekDisplayContainer style={this.props.style}>
        <View
          style={{
            position: 'absolute',
            top: -10,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            height: 10
          }}
        />
        <Headline style={{ textAlign: 'center' }}>{i18n.t(lang.weekDisplay.title)}</Headline>
        <ScrollView
          ref={this.scrollView}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
        >
          <WeekSelectionContainer>{this.renderWeeks()}</WeekSelectionContainer>
        </ScrollView>
      </WeekDisplayContainer>
    )
  }
}

const mapStateToProps = ({ user }: ApplicationState) => ({ user })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectWeek: (week: number) => dispatch(selectWeek(week))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekDisplay)
