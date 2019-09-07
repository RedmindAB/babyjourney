import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { Text } from 'react-native'
import { CenteredFill } from '../../components/common/styled'

class Saved extends Component {
  render() {
    return (
      <Container weekHeader>
        <CenteredFill>
          <Text>Saved</Text>
        </CenteredFill>
      </Container>
    )
  }
}

export default Saved
