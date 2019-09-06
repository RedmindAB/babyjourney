import { ViewStyle, Text } from 'react-native'
import React, { Component } from 'react'
import {
  ForumResponsesContainer,
  ForumResponseRow,
  ResponseIndicatorContainer,
  ResponseIndicatorText
} from './styled'
import { InfoText } from '../styled'

type ForumResponse = {
  title: string
  responseAmount: number
}

type OwnProps = {}

type Props = OwnProps

class ForumResponses extends Component<Props> {
  responses: ForumResponse[] = [
    {
      title: 'Vad tycker ni om namnen?',
      responseAmount: 1
    },
    {
      title: 'Har ni några bäbismatförslag?',
      responseAmount: 10
    }
  ]
  renderForumRows = () => {
    return this.responses.map((row, index) => (
      <ForumResponseRow key={row.title} noBorder={index === this.responses.length - 1}>
        <InfoText style={{ fontSize: 15, fontWeight: 'normal' }}>{row.title}</InfoText>
        <ResponseIndicatorContainer>
          <ResponseIndicatorText>{row.responseAmount}</ResponseIndicatorText>
        </ResponseIndicatorContainer>
      </ForumResponseRow>
    ))
  }

  render() {
    return <ForumResponsesContainer>{this.renderForumRows()}</ForumResponsesContainer>
  }
}
export default ForumResponses
