import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { Text } from 'react-native'
import { CenteredFill } from '../../components/common/styled'
import theme from '../../theme'

class Tools extends Component {
  render() {
    return (
      <Container style={{ paddingTop: theme.BASELINE * 2 }} withoutMargin>
        <CenteredFill>
          <Text>Tools</Text>
        </CenteredFill>
      </Container>
    )
  }
}

export default Tools
