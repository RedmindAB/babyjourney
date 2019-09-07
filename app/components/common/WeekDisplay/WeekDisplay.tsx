import React, { Component } from 'react'
import { ScrollView, TouchableWithoutFeedback, Dimensions, ViewStyle } from 'react-native'
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

type PropsFromState = ReturnType<typeof mapStateToProps>

type OwnProps = {
  style?: ViewStyle
}

type Props = OwnProps & PropsFromState

type State = {
  weekAmount: number
  weeks: number[]
  selectedWeek: number
}

const { width } = Dimensions.get('screen')

class WeekDisplay extends Component<Props, State> {
  scrollView = React.createRef<ScrollView>()

  state: State = {
    weekAmount: 42,
    weeks: [],
    selectedWeek: this.getWeekDay().weeks
  }

  componentDidMount() {
    const weeks = []
    for (let i = 1; i <= this.state.weekAmount; i++) {
      weeks.push(i)
    }

    this.setState({ weeks }, () => {
      setTimeout(() => {
        this.scrollToWeek(this.getWeekDay().weeks)
      }, 0)
    })
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

  scrollToWeek = (week: number) => {
    const scrollX = weekDotLineWidth * 2 * week - weekDotLineWidth - width / 2
    this.scrollView.current.scrollTo({ x: scrollX, animated: false })
  }

  selectWeek = (index: number) => {
    this.setState({ selectedWeek: this.state.weeks[index] })
  }

  renderWeeks = () => {
    const { weeks } = this.getWeekDay()
    const currentWeek = weeks

    const { selectedWeek } = this.state
    return this.state.weeks.map((n: number, index: number) => {
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
            <WeekNumber highLight={isSelectedWeek || isCurrentWeek}>{n}</WeekNumber>
          </WeekNumberContainer>
        </TouchableWithoutFeedback>
      )
    })
  }

  render() {
    const { days } = this.getWeekDay()
    return (
      <WeekDisplayContainer style={this.props.style}>
        <Headline style={{ textAlign: 'center' }}>Your Week</Headline>
        <ScrollView
          ref={this.scrollView}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
        >
          <WeekSelectionContainer>{this.renderWeeks()}</WeekSelectionContainer>
        </ScrollView>
        <InfoText style={{ textAlign: 'center', fontSize: 14, fontWeight: 'normal' }}>
          {days} days
        </InfoText>
      </WeekDisplayContainer>
    )
  }
}

const mapStateToProps = ({ user }: ApplicationState) => ({ user })

export default connect(mapStateToProps)(WeekDisplay)
