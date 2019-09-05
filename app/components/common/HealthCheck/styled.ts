import styled from 'styled-components/native'
import theme from '../../../theme'

export const heartIconSize = theme.BASELINE * 7

export const linearGradientStyles = {
  borderRadius: heartIconSize / 2,
  width: heartIconSize,
  height: heartIconSize
}
export const HeartIcon = styled.View`
  width: ${heartIconSize}px;
  height: ${heartIconSize}px;
`

export const HealthCheckContainer = styled.View`
  flex-direction: row;
`

export const HealthCheckRightContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-left: ${theme.BASELINE * 2};
`

export const HealthCheckTime = styled.Text`
  font-family: ${theme.fonts.Avenir};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12;
`

export const HealthCheckTitle = styled.Text`
  font-family: ${theme.fonts.Lora};
  font-size: 16;
`

export const HealthCheckBottomRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const HealthCheckInfo = styled.Text`
  font-family: ${theme.fonts.Avenir};
  font-weight: 100;
  font-size: 12;
`

export const HealthCheckGoToSchedule = styled.Text`
  font-family: ${theme.fonts.Avenir};
  font-weight: bold;
  font-size: 13;
  color: #ff7272;
`
