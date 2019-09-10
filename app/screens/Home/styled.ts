import styled from 'styled-components/native'
import { Headline } from '../../components/common/styled'
import theme from '../../theme'

export const HomeHeadline = styled(Headline)`
  margin-top: ${theme.BASELINE * 3};
  margin-left: ${theme.SCREEN_PADDING};
  ${props => props.noMargin && `margin-top: 0; margin-left: 0`}
`
export const HomeConentWrapper = styled.View`
  padding: 0 ${theme.SCREEN_PADDING}px;
`

export const HomeTopContainer = styled.View`
  padding: 0 ${theme.SCREEN_PADDING}px;
  margin: ${theme.BASELINE * 1.5}px 0;
`
