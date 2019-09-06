import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { Text, ViewStyle } from 'react-native'
import {
  WhatHappensNowContainer,
  BorderRadiusWrapper,
  CalendarIconContainer,
  RightSideContainer
} from './styled'
import { Icons } from '../../../assets'
import { Title, InfoText } from '../styled'

type OwnProps = {
  style?: ViewStyle
}

type Props = OwnProps

class WhatHappensNow extends Component<Props> {
  render() {
    const { style } = this.props
    return (
      <BorderRadiusWrapper style={style}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff6cc', '#ffe9e9']}>
          <WhatHappensNowContainer>
            <CalendarIconContainer>
              <Icons.Calendar />
            </CalendarIconContainer>
            <RightSideContainer>
              <Title>What happens now?</Title>
              <InfoText>Weekly review for baby, mother and partner</InfoText>
            </RightSideContainer>
          </WhatHappensNowContainer>
        </LinearGradient>
      </BorderRadiusWrapper>
    )
  }
}

export default WhatHappensNow
