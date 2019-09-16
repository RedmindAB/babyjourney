import styled from 'styled-components/native'
import theme from '../../../theme'
import { CenteredView } from '../styled'

export const WeekDisplayContainer = styled.View`
  position: relative;
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
  background-color: white;
  padding-bottom: ${theme.BASELINE};
  shadow-color: #7e728a;
  shadow-offset: 0 4px;
  shadow-opacity: 0.2;
  shadow-radius: 17px;
  elevation: 4;
`
const weekLineContainerHeight = theme.BASELINE * 4
const weekLineHeight = theme.BASELINE * 1.5
const weekDotSize = theme.BASELINE
const weekNumberLineHeight = 20
export const weekDotLineWidth = theme.BASELINE * 3

export const WeekSelectionContainer = styled.View`
  flex-direction: row;
  height: ${weekLineContainerHeight + weekNumberLineHeight};
`

export const LineContainer = styled.View`
  flex: 1;
  position: relative;
  height: ${weekLineContainerHeight}px;
`

export const WeekNumberContainer = styled.View`
  width: ${weekDotLineWidth * 2}px;
  align-items: center;
`

export const WeekDotLine = styled.View`
  position: absolute;
  right: 0;
  top: ${weekLineContainerHeight / 2 - weekLineHeight / 2};
  height: ${weekLineHeight};
  width: ${weekDotLineWidth};
  background-color: #ffeeee;
  ${props => props.gray && `background-color: #f4f2f6;`}
  ${props => props.thin && `height: 2px;`}
  ${props => props.thin && `top: ${15};`}
`

export const WeekDot = styled(CenteredView)`

  position: absolute;
  margin-top: ${weekLineContainerHeight / 2 + weekLineHeight / 2 - 10};
  height: ${weekDotSize}px;
  width: ${weekDotSize}px;
  border-radius: ${weekDotSize / 2}px;
  background-color: #ffacad;
  ${props => props.gray && `background-color: #b9a5c7;`}
  ${props => props.selected && `height: ${weekLineContainerHeight};`}
  ${props => props.selected && `width: ${weekLineContainerHeight};`}
  ${props => props.selected && `border-radius: ${weekLineContainerHeight / 2};`}
  ${props => props.selected && `margin-top: 0;`}
  ${props => props.border && `border-width: 2;`}
  ${props => props.border && `border-color: #b9a5c7;`}
  ${props => props.white && `background-color: white`}
`

export const WeekNumber = styled.Text`
  line-height: ${weekNumberLineHeight}px;
  font-family: ${theme.fonts.Avenir};
  font-size: 14;
  color: #a096ab;
  ${props => props.highLight && `color: #4a4152`}
`
