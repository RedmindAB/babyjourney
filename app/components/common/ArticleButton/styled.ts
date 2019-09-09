import styled from 'styled-components/native'

import theme from '../../../theme'
import { CustomText, Title } from '../styled'

const width = 200
const borderRadius = 14

export const ArticleButtonContainer = styled.View`
  border-radius: ${borderRadius}px;
  width: ${width}px;
  shadow-color: ${theme.secondary.onColor};
  shadow-offset: 0 6px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 1;
  background-color: white;
`

export const ArticleButtonImage = styled.Image`
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  height: ${width}px;
  width: ${width}px;
`

export const ArticleButtonBottomContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  border-bottom-left-radius: ${borderRadius}px;
  border-bottom-right-radius: ${borderRadius}px;
  padding: ${theme.BASELINE * 2}px;
  background-color: ${theme.secondary.color};
`

export const ArticleButtonTitle = styled(Title)``

export const ArticleButtonAuthor = styled(CustomText)`
  font-family: ${theme.fonts.Avenir};
  font-weight: 100;
  font-size: 12;
`
