import styled from 'styled-components/native'
import { Card, CenteredView } from '../styled'
import theme from '../../../theme'

export const ForumResponsesContainer = styled(Card)``

export const ForumResponseRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #f1ebf3;
  padding-bottom: ${theme.BASELINE * 1.5}px;
  margin-bottom: ${theme.BASELINE * 1.5}px;
  ${props => props.noBorder && `border-bottom-width: 0`};
  ${props => props.noBorder && `margin-bottom: 0`};
  ${props => props.noBorder && `padding-bottom: 0`};
`

const size = theme.BASELINE * 3
export const ResponseIndicatorContainer = styled(CenteredView)`
  width: ${size};
  height: ${size};
  border-radius: ${size / 2};
  background-color: #ffacad;
`

export const ResponseIndicatorText = styled.Text`
  color: white;
  font-size: 12;
`
