import styled from 'styled-components/native'
import theme from '../../../theme'
import { Dimensions } from 'react-native'

const containerHeight = 120
const borderRadius = 14

const { width } = Dimensions.get('screen')
export const offerWidth = width - theme.SCREEN_PADDING * 2

export const OfferContainer = styled.View`
  width: ${offerWidth}px;
  height: ${containerHeight}px;
  border-radius: ${borderRadius}px;
  background-color: #ffffff;
  flex-direction: row;
  shadow-color: #ffa2a2;
  shadow-offset: 0 4px;
  shadow-opacity: 0.66;
  shadow-radius: 17px;
  elevation: 4;
`

export const OfferImage = styled.Image`
  border-top-left-radius: ${borderRadius}px;
  border-bottom-left-radius: ${borderRadius}px;
  height: ${containerHeight}px;
  width: ${containerHeight}px;
`

export const OfferRightContainer = styled.View`
  padding: ${theme.BASELINE * 1.5}px;
  flex: 1;
  /* justify-content: space-between; */
  justify-content: center;
`

export const OfferTitle = styled.Text`
  font-family: ${theme.fonts.Lora};
  font-size: 14;
  /* flex-shrink: 1; */
  margin-bottom: ${theme.BASELINE};
`

export const ViewMoreText = styled.Text`
  font-family: ${theme.fonts.Avenir};
  font-weight: bold;
  font-size: 13px;
  color: #ff7273;
`
