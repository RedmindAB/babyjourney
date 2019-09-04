import styled from 'styled-components/native'
import theme from '../../../theme'

export const OfferListContainer = styled.View`
  padding: ${theme.BASELINE * 2}px;
`

export const TopRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.BASELINE};
`

export const SpecialOffersText = styled.Text`
  text-transform: uppercase;
  color: #ff6d6f;
  font-size: 12;
`

export const PageDotContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${theme.BASELINE}px 0;
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
