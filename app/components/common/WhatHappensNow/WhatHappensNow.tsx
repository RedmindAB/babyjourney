import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { ViewStyle, TouchableOpacity } from 'react-native'
import {
  WhatHappensNowContainer,
  BorderRadiusWrapper,
  CalendarIconContainer,
  RightSideContainer
} from './styled'
import { Icons } from '../../../assets'
import { Title, InfoText } from '../styled'
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { screens } from '../../../navigation/navigationConstants'

type OwnProps = {
  style?: ViewStyle
}

type Props = OwnProps & NavigationScreenProps

class WhatHappensNow extends Component<Props> {
  goToWhatHappensNow = () => {
    this.props.navigation.navigate(screens.WHAT_HAPPENS_NOW)
  }

  render() {
    const { style } = this.props
    return (
      <TouchableOpacity onPress={this.goToWhatHappensNow}>
        <BorderRadiusWrapper style={style}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#fff6cc', '#ffe9e9']}
          >
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
      </TouchableOpacity>
    )
  }
}

export default withNavigation(WhatHappensNow)
