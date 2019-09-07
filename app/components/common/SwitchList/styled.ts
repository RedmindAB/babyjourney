import styled from 'styled-components/native'
import theme from '../../../theme'
import { CenteredView } from '../styled'

const height = theme.BASELINE * 5
const padding = theme.BASELINE / 2
export const SwitchListContainer = styled.View`
  padding: ${padding}px;
  flex-direction: row;
  align-items: center;
  height: ${height}px;
  border-radius: ${height / 2}px;
  background-color: #fff2f2;
`

const containerHeight = height - padding * 2
export const OptionContainer = styled(CenteredView)`
  height: ${containerHeight}px;
  flex: 1;
  border-radius: ${containerHeight / 2}px;
  ${props => props.selected && `background-color: #ffacad`}
`

export const OptionText = styled.Text`
  font-family: ${theme.fonts.Avenir};
  font-size: 14;
  color: #4a4152;
`
