import React, { Component } from 'react'
import { ViewProps, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import * as placeHolders from '../../../assets/images'
import {
  ArticleButtonContainer,
  ArticleButtonImage,
  ArticleButtonBottomContainer,
  ArticleButtonTitle,
  ArticleButtonAuthor
} from './styled'
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { stacks } from '../../../navigation/navigationConstants'

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

type Props = OwnProps & ViewProps & NavigationScreenProps

class ArticleButton extends Component<Props> {
  goToArticle = () => {
    const { article } = this.props
    this.props.navigation.navigate(stacks.WEB_VIEW, { uri: article.url })
  }

  getRandomPlaceHolder() {
    const nmbr = Math.floor(Math.random() * 3 + 1)
    return placeHolders[`placeHolder${nmbr}`]
  }

  render() {
    const { article, style } = this.props
    const hasImage =
      article.imageUrl && article.imageUrl.length > 0 && article.imageUrl !== article.url
    const source = hasImage ? { uri: article.imageUrl } : this.getRandomPlaceHolder()
    return (
      <ArticleButtonContainer style={style}>
        <View style={{ flex: 1, overflow: 'hidden' }}>
          <TouchableOpacity onPress={this.goToArticle}>
            <View style={{ height: '100%' }}>
              <ArticleButtonImage source={source} />
              <ArticleButtonBottomContainer>
                <ArticleButtonTitle numberOfLines={2}>{article.title}</ArticleButtonTitle>
                <ArticleButtonAuthor light>{article.author}</ArticleButtonAuthor>
              </ArticleButtonBottomContainer>
            </View>
          </TouchableOpacity>
        </View>
      </ArticleButtonContainer>
    )
  }
}

export default withNavigation(ArticleButton)
