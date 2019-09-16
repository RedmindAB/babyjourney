import styled from 'styled-components/native'
import theme from '../../../theme'
import { CenteredView } from '../styled'

const barLineHeight = theme.BASELINE * 1.5
const percentageNumberContainerHeight = theme.BASELINE * 3
export const percentageNumberContainerWidth = theme.BASELINE * 6
const percentageBarContainerHeight = 14
export const PercentageBarContainer = styled.View`
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: #fff2f3;
  height: ${percentageBarContainerHeight}px;
  border-radius: ${percentageBarContainerHeight / 2};
  padding: 4px;
  margin-bottom: ${percentageNumberContainerHeight + barLineHeight}px;
`

export const PercentageBar = styled.View`
  height: ${theme.BASELINE}px;
  border-radius: ${theme.BASELINE / 2};
  background-color: #ffb9ba;
  align-items: flex-end;
`

export const PercentageBarDot = styled.View`
  width: ${theme.BASELINE}px;
  height: ${theme.BASELINE}px;
  border-radius: ${theme.BASELINE / 2}px;
  background-color: #ff8b8d;
`

export const PercentageBarLine = styled.View`
  width: 1px;
  height: ${barLineHeight};
  background-color: #ffacad;
  margin-right: 3.5;
`

export const PercentageBarNumberContainer = styled(CenteredView)`
  background-color: #ffacad;
  border-radius: 8;
  height: ${percentageNumberContainerHeight};
  width: ${percentageNumberContainerWidth};
`
export const PercentageText = styled.Text`
  font-family: ${theme.fonts.Avenir};
  font-size: 14;
  color: white;
`

const babyLogoHeight = 44
const borderWidth = 3
export const BabyLogo = styled(CenteredView)`
  height: ${babyLogoHeight};
  width: ${babyLogoHeight};
  border-radius: ${babyLogoHeight / 2};
  background-color: white;
  border-width: ${borderWidth};
  border-color: #ffd5d4;
`

export const BabyLogoWhiteBorder = styled.View`
  border-radius: ${babyLogoHeight + borderWidth / 2};
  position: absolute;
  top: ${-(babyLogoHeight + borderWidth) / 2 + percentageBarContainerHeight / 2};
  right: 0;
  border-width: 1;
  border-color: white;
  shadow-color: #ffa2a2;
  shadow-offset: 0 4px;
  shadow-opacity: 0.66;
  shadow-radius: 6px;
  elevation: 4;
`
