import styled from 'styled-components/native'
import theme from '../../../theme'
import { CenteredView, Card } from '../styled'

export const CheckListContainer = styled(Card)``

export const CheckListItemContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #f1ebf3;
  padding-bottom: ${theme.BASELINE * 1.5}px;
  margin-bottom: ${theme.BASELINE * 1.5}px;
  ${props => props.noBorder && `border-bottom-width: 0`};
  ${props => props.noBorder && `margin-bottom: 0`};
  ${props => props.noBorder && `padding-bottom: 0`};
`

export const CheckListItemInnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CheckListItemText = styled.Text`
  font-family: ${theme.fonts.Lora};
  font-size: 13;
`

const checkMarkContainerSize = theme.BASELINE * 3

export const CheckListCheckMarkContainer = styled(CenteredView)`
  width: ${checkMarkContainerSize}px;
  height: ${checkMarkContainerSize}px;
  border-radius: ${checkMarkContainerSize / 2}px;
  border-width: 1;
  border-color: #ffacad;
  background-color: #ffffff;
  ${props => props.checked && `background-color: #ffacad`};
`
