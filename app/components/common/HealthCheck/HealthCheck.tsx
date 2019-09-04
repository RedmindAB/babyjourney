import React, { Component } from 'react'
import {
  HeartIcon,
  linearGradientStyles,
  HealthCheckContainer,
  HealthCheckTime,
  HealthCheckTitle,
  HealthCheckInfo,
  HealthCheckRightContainer,
  HealthCheckBottomRow,
  HealthCheckGoToSchedule
} from './styled'
import LinearGradient from 'react-native-linear-gradient'

class HealthCheck extends Component {
  render() {
    return (
      <HealthCheckContainer>
        <LinearGradient
          style={linearGradientStyles}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#fff4f4', '#ffbaba']}
        >
          <HeartIcon />
        </LinearGradient>
        <HealthCheckRightContainer>
          <HealthCheckTime>weeks 4 to 28</HealthCheckTime>
          <HealthCheckTitle>1 parental visit a month</HealthCheckTitle>
          <HealthCheckBottomRow>
            <HealthCheckInfo>3 visits left</HealthCheckInfo>
            <HealthCheckGoToSchedule>Go to schedule</HealthCheckGoToSchedule>
          </HealthCheckBottomRow>
        </HealthCheckRightContainer>
      </HealthCheckContainer>
    )
  }
}

export default HealthCheck
