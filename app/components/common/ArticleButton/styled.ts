import styled from 'styled-components/native'

import theme from '../../../theme'
import { CustomText } from '../styled'

const width = 200
const borderRadius = 14

export const ArticleButtonContainer = styled.View`
  border-radius: ${borderRadius}px;
  width: ${width}px;
  shadow-color: ${theme.secondary.onColor};
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 1;
`

export const ArticleButtonImage = styled.Image`
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  height: ${width}px;
  width: ${width}px;
`

export const ArticleButtonBottomContainer = styled.View`
  border-bottom-left-radius: ${borderRadius}px;
  border-bottom-right-radius: ${borderRadius}px;
  padding: ${theme.BASELINE * 2}px;
  background-color: ${theme.secondary.color};
`

export const ArticleButtonTitle = styled.Text`
  font-family: ${theme.fonts.Lora};
  font-size: 16;
  margin-bottom: ${theme.BASELINE}px;
`

export const ArticleButtonAuthor = styled(CustomText)`
  font-family: ${theme.fonts.Avenir};
  font-weight: 100;
  font-size: 12;
`
