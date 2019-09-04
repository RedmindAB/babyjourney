import React, { Component } from 'react'
import { ViewProps } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  ArticleButtonContainer,
  ArticleButtonImage,
  ArticleButtonBottomContainer,
  ArticleButtonTitle,
  ArticleButtonAuthor
} from './styled'

export type ArticleModel = {
  uri: string
  title: string
  author: string
  category: string
}

type OwnProps = {
  article: ArticleModel
}

type Props = OwnProps & ViewProps

class ArticleButton extends Component<Props> {
  render() {
    const { article, style } = this.props
    return (
      <ArticleButtonContainer style={style}>
        <TouchableOpacity>
          <ArticleButtonImage source={{ uri: article.uri }} />
          <ArticleButtonBottomContainer>
            <ArticleButtonTitle>{article.title}</ArticleButtonTitle>
            <ArticleButtonAuthor>{article.author}</ArticleButtonAuthor>
          </ArticleButtonBottomContainer>
        </TouchableOpacity>
      </ArticleButtonContainer>
    )
  }
}

export default ArticleButton
