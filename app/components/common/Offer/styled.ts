import styled from 'styled-components/native'
import theme from '../../../theme'

const containerHeight = 120
const borderRadius = 14

export const OfferContainer = styled.View`
  height: ${containerHeight}px;
  border-radius: ${borderRadius}px;
  background-color: #ffffff;
  flex-direction: row;
  shadow-color: #ffa2a2;
  shadow-offset: 0 4px;
  shadow-opacity: 0.66;
  shadow-radius: 17px;
  elevation: 1;
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
  justify-content: space-between;
`

export const OfferTitle = styled.Text`
  font-size: 16;
  flex-shrink: 1;
`

export const OfferText = styled.Text`
  font-size: 12;
  flex-shrink: 1;
`

export const ViewMoreText = styled.Text`
  font-size: 13px;
  color: #ff7273;
`
