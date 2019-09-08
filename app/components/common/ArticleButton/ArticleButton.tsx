import React, { Component } from 'react'
import { ViewProps, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  ArticleButtonContainer,
  ArticleButtonImage,
  ArticleButtonBottomContainer,
  ArticleButtonTitle,
  ArticleButtonAuthor
} from './styled'

export type ArticleModel = {
  imageUrl: string
  url: string
  title: string
  author: string
  category: string
  week: number
}

type OwnProps = {
  article: ArticleModel
}

type Props = OwnProps & ViewProps

class ArticleButton extends Component<Props> {
  goToArticle = () => {
    const { article } = this.props
    if (Linking.canOpenURL(article.url)) {
      Linking.openURL(article.url)
    }
  }

  render() {
    const { article, style } = this.props
    return (
      <ArticleButtonContainer style={style}>
        <TouchableOpacity onPress={this.goToArticle}>
          <ArticleButtonImage source={{ uri: article.imageUrl }} />
          <ArticleButtonBottomContainer>
            <ArticleButtonTitle numberOfLines={2}>{article.title}</ArticleButtonTitle>
            <ArticleButtonAuthor light>{article.author}</ArticleButtonAuthor>
          </ArticleButtonBottomContainer>
        </TouchableOpacity>
      </ArticleButtonContainer>
    )
  }
}

export default ArticleButton
