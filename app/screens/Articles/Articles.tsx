import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { Text } from 'react-native'
import { CenteredFill } from '../../components/common/styled'

class Articles extends Component {
  render() {
    return (
      <Container withoutMargin>
        <CenteredFill>
          <Text>Articles</Text>
        </CenteredFill>
      </Container>
    )
  }
}

export default Articles
