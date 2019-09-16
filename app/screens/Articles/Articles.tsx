import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { CenteredFill, InfoText } from '../../components/common/styled'
import i18n, { lang } from '../../translations'

class Articles extends Component {
  render() {
    return (
      <Container withoutMargin>
        <CenteredFill>
          <InfoText>{i18n.t(lang.articles.placeholder)}</InfoText>
        </CenteredFill>
      </Container>
    )
  }
}

export default Articles
