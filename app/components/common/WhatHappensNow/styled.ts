import styled from 'styled-components/native'
import theme from '../../../theme'
import { CenteredView } from '../styled'

export const WhatHappensNowContainer = styled.View`
  flex: 1;
  padding: ${theme.BASELINE * 2}px;
`

export const iconContainerSize = 68

export const IconsRowContainer = styled.View`
  margin-top: ${theme.BASELINE * 3};
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const IconColumn = styled.View`
  height: 140;
  margin-left: ${theme.BASELINE * 4};
  ${props => props.noMargin && `margin-left: 0`};
`

export const IconContainer = styled(CenteredView)`
  position: relative;
  width: ${iconContainerSize}px;
  height: ${iconContainerSize}px;
  border-radius: ${iconContainerSize / 2}px;
  background-color: #fff;
  shadow-color: #ffba8e;
  shadow-offset: 0 0;
  shadow-opacity: 0.49;
  shadow-radius: 8px;
  elevation: 4;
`

export const RightSideContainer = styled.View`
  margin-left: ${theme.BASELINE * 2};
  justify-content: center;
  padding-right: 32;
  flex: 1;
`
