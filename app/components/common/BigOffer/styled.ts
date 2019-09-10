import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import theme from '../../../theme'
import { Title } from '../styled'

const { width } = Dimensions.get('screen')

const imageWidth = width - theme.SCREEN_PADDING * 2
const imageHeight = imageWidth / (16 / 9)
const borderRadius = 14

export const BigOfferContainer = styled.View`
  border-radius: ${borderRadius};
  shadow-color: #7e728a;
  shadow-offset: 0 4px;
  shadow-opacity: 0.2;
  shadow-radius: 17px;
  elevation: 1;
  background-color: white;
`
export const BigOfferImage = styled.Image`
  width: ${imageWidth};
  height: ${imageHeight};
  border-top-right-radius: ${borderRadius};
  border-top-left-radius: ${borderRadius};
`
export const BigOfferBottomContainer = styled.View`
  padding: ${theme.BASELINE * 2}px;
`
export const BigOfferTitle = styled(Title)`
  font-size: 20;
`
