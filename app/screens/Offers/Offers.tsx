import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { Text } from 'react-native'
import { CenteredFill } from '../../components/common/styled'

class Offers extends Component {
  render() {
    return (
      <Container>
        <CenteredFill>
          <Text>Offers</Text>
        </CenteredFill>
      </Container>
    )
  }
}

export default Offers
