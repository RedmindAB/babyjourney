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
import { Icons } from '../../../assets'
import i18n, { lang } from '../../../translations'

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
          <HeartIcon>
            <Icons.Health />
          </HeartIcon>
        </LinearGradient>
        <HealthCheckRightContainer>
          <HealthCheckTime>
            {i18n.t(lang.myHealthWidget.headline, { startWeek: 4, endWeek: 28 })}
          </HealthCheckTime>
          <HealthCheckTitle>{i18n.t(lang.myHealthWidget.body)}</HealthCheckTitle>
          <HealthCheckBottomRow>
            <HealthCheckInfo light>
              {i18n.t(lang.myHealthWidget.visistLeft, { amount: 3 })}
            </HealthCheckInfo>
            <HealthCheckGoToSchedule>
              {i18n.t(lang.myHealthWidget.goToCalender)}
            </HealthCheckGoToSchedule>
          </HealthCheckBottomRow>
        </HealthCheckRightContainer>
      </HealthCheckContainer>
    )
  }
}

export default HealthCheck
