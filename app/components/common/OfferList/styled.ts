import styled from 'styled-components/native'
import theme from '../../../theme'

export const OfferListContainer = styled.View`
  padding-top: 0;
`

export const TopRowContainer = styled.View`
  padding: 0 ${theme.SCREEN_PADDING}px;
  margin-top: ${theme.BASELINE}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: visible;
  margin-bottom: ${theme.BASELINE};
`

export const PageDotContainer = styled.View`
  padding: 0 ${theme.SCREEN_PADDING}px;
  padding-bottom: ${theme.SCREEN_PADDING}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${theme.BASELINE}px;
`

const dotSize = 8

export const PageDot = styled.View`
  width: ${dotSize}px;
  height: ${dotSize}px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: ${dotSize / 2}px;
  margin-right: ${theme.BASELINE};
  ${props => props.active && `background-color: #FFF`}
  ${props => props.last && `margin-right: 0`};
`
