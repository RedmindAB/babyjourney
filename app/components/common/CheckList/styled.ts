import styled from 'styled-components/native'
import theme from '../../../theme'

export const CheckListContainer = styled.View`
  background-color: #ffffff;
  border-radius: 14px;
  shadow-color: ${theme.secondary.onColor};
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 1;
  padding: ${theme.BASELINE * 2}px;
`

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

export const CheckListCheckMarkContainer = styled.View`
  width: ${checkMarkContainerSize}px;
  height: ${checkMarkContainerSize}px;
  border-radius: ${checkMarkContainerSize / 2}px;
  border-width: 1;
  border-color: #ffacad;
  background-color: #ffffff;
  ${props => props.checked && `background-color: #ffacad`};
`
