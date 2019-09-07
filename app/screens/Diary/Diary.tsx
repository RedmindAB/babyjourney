import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { Text } from 'react-native'
import { CenteredFill } from '../../components/common/styled'

class Diary extends Component {
  render() {
    return (
      <Container weekHeader>
        <CenteredFill>
          <Text>Diary</Text>
        </CenteredFill>
      </Container>
    )
  }
}

export default Diary
