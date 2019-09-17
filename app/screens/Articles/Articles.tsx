import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { CenteredFill, Headline } from '../../components/common/styled'
import i18n, { lang } from '../../translations'
import { articles } from '../Home/mockArticlesData'
import ArticleButton, { ArticleModel } from '../../components/common/ArticleButton/ArticleButton'
import { View, FlatList } from 'react-native'
import theme from '../../theme'

const articleCollection = articles.reduce(
  (collection: { [category: string]: ArticleModel[] }, article) => {
    const { category } = article
    if (!collection[category]) {
      collection[category] = []
    }
    collection[category].push(article)
    return collection
  },
  {}
)

class Articles extends Component {
  renderArticles() {
    return Object.keys(articleCollection).map(category => this.renderCategory(category))
  }

  articleKeyExtractor = (article: ArticleModel) => article.title

  renderArticle = ({ item, index }) => {
    const style = index === articles.length - 1 ? {} : { marginRight: theme.BASELINE * 2 }
    return <ArticleButton article={item} style={style} />
  }

  renderCategory(category: string) {
    return (
      <View>
        <Headline>{i18n.t(lang.articles.categories[category])}</Headline>
        <FlatList
          style={{ flexGrow: 0, backgroundColor: 'transparent', overflow: 'visible' }}
          keyExtractor={this.articleKeyExtractor}
          contentContainerStyle={{
            paddingHorizontal: theme.SCREEN_PADDING,
            paddingBottom: theme.BASELINE * 2,
            paddingTop: 0
          }}
          data={articleCollection[category]}
          renderItem={this.renderArticle}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    )
  }

  render() {
    return (
      <Container withoutMargin>
        <CenteredFill>{this.renderArticles()}</CenteredFill>
      </Container>
    )
  }
}

export default Articles
