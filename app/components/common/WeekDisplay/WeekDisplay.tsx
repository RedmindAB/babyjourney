import React, { Component } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import {
  WeekDisplayContainer,
  WeekSelectionContainer,
  WeekDot,
  WeekNumberContainer,
  WeekNumber,
  WeekDotLine,
  LineContainer
} from './styled'
import { Headline, InfoText } from '../styled'

type State = {
  weekAmount: number
  weeks: number[]
  currentWeek: number
  selectedWeek: number
  currentDay: number
}

class WeekDisplay extends Component<{}, State> {
  state: State = {
    weekAmount: 42,
    weeks: [],
    currentWeek: 5,
    currentDay: 3,
    selectedWeek: 7
  }

  componentDidMount() {
    const weeks = []
    for (let i = 1; i <= this.state.weekAmount; i++) {
      weeks.push(i)
    }

    this.setState({ weeks })
  }

  selectWeek = (index: number) => {
    this.setState({ selectedWeek: this.state.weeks[index] })
  }

  renderWeeks = () => {
    const { selectedWeek, currentWeek } = this.state
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
    return (
      <WeekDisplayContainer>
        <Headline style={{ textAlign: 'center' }}>Your Week</Headline>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <WeekSelectionContainer>{this.renderWeeks()}</WeekSelectionContainer>
        </ScrollView>
        <InfoText style={{ textAlign: 'center', fontSize: 14, fontWeight: 'normal' }}>
          {this.state.currentDay} days
        </InfoText>
      </WeekDisplayContainer>
    )
  }
}

export default WeekDisplay
