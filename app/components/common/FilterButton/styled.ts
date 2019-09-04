import styled from 'styled-components/native'

import { Paragraph, CenteredView } from '../styled'
import theme from '../../../theme'

const height = theme.BASELINE * 4

export const FilterButtonText = styled(Paragraph)`
  font-size: 14;
`
export const FilterButtonContainer = styled(CenteredView)`
  height: ${theme.BASELINE * 4};
  min-width: ${theme.BASELINE * 10};
  border-radius: ${height / 2};
  padding: 0 ${theme.BASELINE * 2}px;
  border-width: 1;
  border-color: ${theme.tertiary.color};

  ${props => props.selected && `background-color: ${theme.tertiary.color}`}
`
