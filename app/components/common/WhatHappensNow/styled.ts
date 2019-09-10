import styled from 'styled-components/native'
import theme from '../../../theme'
import { CenteredView } from '../styled'

export const WhatHappensNowContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const BorderRadiusWrapper = styled.View`
  border-radius: 14px;
  overflow: hidden;
`

const iconContainerSize = 68

export const CalendarIconContainer = styled(CenteredView)`
  width: ${iconContainerSize}px;
  height: ${iconContainerSize}px;
  border-radius: ${iconContainerSize / 2}px;
  background-color: #fff;
  shadow-color: #f5e184;
  shadow-offset: 0 4px;
  shadow-opacity: 0.93;
  shadow-radius: 17px;
  elevation: 1;
`

export const RightSideContainer = styled.View`
  margin-left: ${theme.BASELINE * 2};
  justify-content: center;
  padding-right: 32;
  flex: 1;
`
