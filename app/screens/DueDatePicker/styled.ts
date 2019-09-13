import styled from 'styled-components/native'
import { CenteredFill } from '../../components/common/styled'
import theme from '../../theme'

export const DueDatePickerContainer = styled(CenteredFill)`
  padding: ${theme.SCREEN_PADDING}px;
`

export const PickerWrapper = styled.View`
  background-color: #ffb9ba;
  border-radius: 14;
  transform: scale(0.9);
`
