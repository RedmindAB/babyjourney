import styled from 'styled-components/native'
import { getStatusBarHeight, getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper'
import { layout } from '../../theme/variables'
import theme from '../../theme'
export const CustomText = styled.Text`
  color: ${theme.background.onColor};
  ${props => props.primary && `color: ${theme.primary.onColor}`};
  ${props => props.secondary && `color: ${theme.secondary.onColor}`};
  ${props => props.tertiary && `color: ${theme.tertiary.onColor}`};
  ${props => props.background && `color: ${theme.background.onColor}`};
  ${props => props.error && `color: ${theme.error};`}
  ${props => props.light && `color: ${theme.background.inactiveOnColor};`}
  ${props => props.centered && `text-align: center;`}
  ${props => props.uppercase && `text-transform: uppercase;`}
  ${props => props.lowercase && `text-transform: lowercase;`}
  ${props => props.verticalMargin && `margin: ${props.verticalMargin}px 0;`}
`
export const CustomView = styled.View`
  background-color: ${theme.background.color};
  ${props => props.primary && `background-color: ${theme.primary.color}`};
  ${props => props.secondary && `background-color: ${theme.secondary.color}`};
  ${props => props.tertiary && `background-color: ${theme.tertiary.color}`};
  ${props => props.background && `background-color: ${theme.background.color}`};
  ${props => props.error && `background-color: ${theme.error};`}
  ${props => props.success && `background-color: ${theme.success};`}
  ${props => props.verticalMargin && `margin: ${props.verticalMargin}px 0;`}
`
export const Card = styled.View`
  background-color: white;
  border-top-left-radius: 25;
  border-top-right-radius: 25;
  shadow-opacity: ${theme.boxShadowMedium.shadowOpacity};
  shadow-radius: ${theme.boxShadowMedium.shadowRadius};
  shadow-color: ${theme.boxShadowMedium.shadowColor};
  shadow-offset: ${theme.boxShadowMedium.shadowOffset.width}px
    ${theme.boxShadowMedium.shadowOffset.height}px;
  elevation: ${theme.boxShadowMedium.elevation};
`
export const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
`
export const CenteredFill = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Header = styled(CustomText)`
  font-size: ${layout.isSmallDevice ? 18 : 24};
`

export const Headline = styled.Text`
  text-transform: uppercase;
  color: #ff6d6f;
  font-size: 12;
  margin: ${theme.BASELINE * 1.5}px;
  ${props => props.noMargin && `margin: 0`}
`

export const SubHeader = styled(CustomText)`
  font-size: 21;
  text-align: center;
`
export const HeaderLight = styled(CustomText)`
  font-size: 25;
  color: ${theme.background.inactiveOnColor};
`
export const Paragraph = styled(CustomText)`
  font-size: ${layout.isSmallDevice ? 12 : 14};
`
export const ToolTip = styled(CustomText)`
  font-size: 14;
  text-align: center;
`
export const BreadCrumb = styled(CustomText)`
  font-size: 13;
  font-weight: 900;
`
export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  ${props => props.spaceBetween && 'justify-content: space-between;'}
  ${props => props.spaceAround && 'justify-content: space-around;'}
  ${props => props.center && 'justify-content: center;'}
`
export const AlignRight = styled.View`
  align-items: flex-end;
`
export const Divider = styled.View`
  height: 2;
  background-color: ${props => props.color || 'rgb(236, 236, 248)'};
  margin-top: ${props => (typeof props.space === 'undefined' ? 30 : props.space)};
  margin-bottom: ${props => (typeof props.space === 'undefined' ? 30 : props.space)};
`
export const TextInput = styled.TextInput`
  border-bottom-width: 2;
  flex: 1;
  padding: 8px;
  color: ${theme.primary.color};
`
export const Container = styled(CustomView)`
  flex: 1;
  padding: ${props => (props.withoutPadding ? 0 : theme.screenContainerPadding)}px;
`
export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  margin: 0 ${props => (props.withoutPadding ? 0 : theme.screenContainerPadding)}px;
  margin-top: ${props => (props.withoutPadding ? 0 : theme.screenContainerPadding)}px;
  ${props => props.primary && `background-color: ${theme.primary.color};`}
  ${props => props.secondary && `background-color: ${theme.secondary.color};`}
  ${props => props.tertiary && `background-color: ${theme.tertiary.color};`}
  ${props => props.background && `background-color: ${theme.background.color};`}
`
export const WhiteSpace = styled.View`
  ${props =>
    props.amount &&
    (props.horizontal
      ? `width: ${props.amount || theme.BASELINE}`
      : `height: ${props.amount || theme.BASELINE};`)}
`
export const CircleView = styled(CustomView)`
  height: ${props => props.size || '0px'};
  width: ${props => props.size || '0px'};
  border-radius: ${props => props.size / 2 || '0px'};
  justify-content: center;
  align-items: center;
`
export const BottomContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: ${getBottomSpace()};
`
export const BottomAbsoluteContainer = styled.View`
  position: absolute;
  bottom: ${theme.getBottomScreenSpace()};
`
export const HeaderSpace = styled.View`
  height: ${theme.headerHeight + getStatusBarHeight() + theme.screenContainerPadding};
`
export const ScreenContainer = styled.View`
  flex: 1;
  padding: ${theme.screenContainerPadding}px;
  padding-top: ${theme.headerHeight +
    theme.screenContainerPadding +
    (isIphoneX() ? getStatusBarHeight() / 2 : 0)};
  ${props =>
    props.withoutHeaderSpace &&
    `padding-top: ${getStatusBarHeight() + theme.screenContainerPadding}`}
`
export const FillView = styled.View`
  flex: 1;
`
export const FullScreenView = styled.View`
  height: ${layout.height};
  width: ${layout.width};
`
export const ScreenHorizontalPadding = styled.View`
  margin: 0 ${theme.screenContainerPadding}px;
`
export const VerticalMargin = styled.View`
  margin: ${props => props.margin || theme.BASELINE}px 0;
`
export const FlexView = styled.View`
  flex: 1;
`
export const ListItem = styled.TouchableOpacity`
  border-bottom-width: 1;
  border-bottom-color: ${props => (props.noBorder ? 'transparent' : '#e8e7ea')};
  padding: ${theme.BASELINE * 2.5}px 0;
  ${props => props.disabled && 'opacity: 0.4'}
`
