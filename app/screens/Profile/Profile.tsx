import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { Text } from 'react-native'
import { CenteredFill } from '../../components/common/styled'

class Profile extends Component {
  render() {
    return (
      <Container>
        <CenteredFill>
          <Text>Profile</Text>
        </CenteredFill>
      </Container>
    )
  }
}

export default Profile
