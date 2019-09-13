import styled from 'styled-components/native'
import theme from '../../../theme'

export const SquareButtonContainer = styled.View`
  background-color: #ff8c8d;
  padding: ${theme.BASELINE}px ${theme.BASELINE * 1.5}px;
  border-radius: 6px;
  width: auto;
  justify-content: center;
  align-items: center;
  ${props => props.bigButton && `width: 210`}
  ${props => props.bigButton && `height: 48`}
  ${props => props.disabled && `opacity: 0.36`}
`

export const SquareButtonText = styled.Text`
  font-family: ${theme.fonts.Avenir};
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 12;
  ${props => props.bigButton && `font-size: 14`}
`
