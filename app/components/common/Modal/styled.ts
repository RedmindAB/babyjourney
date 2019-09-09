import styled from 'styled-components/native'
import theme from '../../../theme'
import { CenteredView } from '../styled'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export const XbuttonContainer = styled.View`
  position: absolute;
  top: ${theme.BASELINE * 2};
  left: ${theme.BASELINE * 3};
`

export const Xbutton = styled.Text`
  font-size: 28;
`

export const ModalBackground = styled(CenteredView)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`

export const ModalContainer = styled.View`
  align-items: center;
  padding: ${theme.BASELINE * 4}px;
  background-color: white;
  border-radius: 14;
  width: ${width - theme.SCREEN_PADDING * 4}px;
`
