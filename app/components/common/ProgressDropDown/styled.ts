import styled from 'styled-components/native'
import theme from '../../../theme'
import { InfoText, CenteredView } from '../styled'

export const WhiteBackground = styled.View`
  background-color: white;
  z-index: 1;
`

export const ProgressDropDownContainer = styled.View`
  background-color: #ffe9e9;
  padding: ${theme.SCREEN_PADDING}px;
  padding-bottom: 0;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  ${props => props.expanded && `border-bottom-left-radius: 0;`}
  ${props => props.expanded && `border-bottom-right-radius: 0;`}
`

export const ProgressInfoText = styled(InfoText)`
font-size: 12;
  ${props => props.border && `padding-right: ${theme.BASELINE}`}
  ${props => props.border && `margin-right: ${theme.BASELINE}`}
  ${props => props.border && `border-right-width: 5px`}
  ${props => props.border && `border-color: black`}
`

export const InfoTextContainer = styled.View`
  flex-direction: row;
`

export const ExpandButton = styled(CenteredView)`
  flex-direction: row;
`

export const ExpandButtonText = styled.Text`
  margin-right: ${theme.BASELINE};
  text-transform: uppercase;
  font-family: ${theme.fonts.Avenir};
  font-size: 12;
  color: #322b39;
`

export const BottomContainer = styled.View`
  margin-top: ${theme.BASELINE * 6}px;
  align-items: center;
`

const babyCompareSize = 120

export const Two = styled.View`
  background-color: rgba(255, 255, 255, 0.16);
  margin: ${theme.BASELINE * 6}px;
  padding: 12px;
  border-radius: 99999;

  shadow-color: #ff9d9e;
  shadow-offset: 0 0;
  shadow-opacity: 0.15;
  shadow-radius: 2px;
  elevation: 1;
`

export const One = styled.View`
  background-color: rgba(255, 255, 255, 0.54);
  margin: ${theme.BASELINE * 6}px;
  padding: 12px;
  border-radius: 99999;

  shadow-color: #ff9d9e;
  shadow-offset: 0 0;
  shadow-opacity: 0.29;
  shadow-radius: 8px;
  elevation: 1;
`

export const BabyComparisonContainer = styled(CenteredView)`
  width: ${babyCompareSize}px;
  height: ${babyCompareSize}px;
  border-radius: ${babyCompareSize / 2}px;
  margin: ${theme.BASELINE * 6}px;
  background-color: white;
  shadow-color: #ff9d9e;
  shadow-offset: 0 0;
  shadow-opacity: 0.47;
  shadow-radius: 8px;
  elevation: 1;
`

export const BabyInfoContainer = styled.View`
  margin-top: ${theme.BASELINE}px;
  align-items: center;
  width: 100%;
  /* margin-bottom: ${theme.BASELINE * 8}px; */
`

export const InfoRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const BabyInfoTitle = styled.Text`
  color: #6e6578;
  font-family: ${theme.fonts.Avenir};
  text-transform: uppercase;
  font-size: 12;
  text-align: center;
  margin-bottom: ${theme.BASELINE / 2}px;
`

export const BabyInfoText = styled.Text`
  font-family: ${theme.fonts.Lora};
  font-size: 20;
  text-align: center;
`
