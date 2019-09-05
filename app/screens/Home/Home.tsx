import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'

import Container from '../../components/common/Container'
import FilterList from '../../components/common/FilterList'

import styles from './styles'
import ArticleButton from '../../components/common/ArticleButton'
import { ArticleModel } from '../../components/common/ArticleButton/ArticleButton'
import { FlatList } from 'react-native-gesture-handler'
import theme from '../../theme'
import OfferList from '../../components/common/OfferList'
import { HomeHeadline, HomeConentWrapper, HomeTopContainer } from './styled'
import CheckList from '../../components/common/CheckList'
import { CheckListItem } from '../../components/common/CheckList/CheckList'
import HealthCheck from '../../components/common/HealthCheck'
import { articles } from './mockArticlesData'
import { Icons } from '../../assets'

type Props = NavigationScreenProps

type State = {
  activeFilter: string
  checkList: CheckListItem[]
  filteredArticles: ArticleModel[]
}

class Home extends Component<Props, State> {
  filters = [
    { label: 'All', value: 'all' },
    { label: 'Lifestyle', value: 'lifestyle' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Cuisine', value: 'cuisine' },
    { label: 'Sports', value: 'sports' }
  ]

  state: State = {
    activeFilter: this.filters[0].value,
    filteredArticles: articles,
    checkList: [
      { title: 'Attend yoga classes', done: false },
      { title: 'Visit healthy food cooking class', done: false },
      { title: 'Talk to psychologist', done: false }
    ]
  }

  setFilter = (filter: any) => {
    const filteredArticles =
      filter.value === 'all'
        ? articles
        : articles.filter(article => article.category === filter.value)
    this.setState({ activeFilter: filter.value, filteredArticles })
  }

  articleKeyExtractor = (article: ArticleModel) => article.title

  renderArticle = ({ item, index }) => {
    const style = index === articles.length - 1 ? {} : { marginRight: theme.BASELINE * 2 }
    return <ArticleButton article={item} style={style} />
  }

  onCheckListItemPress = (index: number) => {
    const { checkList } = this.state
    checkList[index].done = !checkList[index].done
    this.setState({ checkList })
  }

  render() {
    return (
      <Container style={styles.container}>
        <HomeTopContainer>
          <HomeHeadline noMargin>week 15 in social media</HomeHeadline>
          <Icons.Search />
        </HomeTopContainer>
        <FilterList
          onPress={this.setFilter}
          selectedValue={this.state.activeFilter}
          filters={this.filters}
        />
        <HomeHeadline>stories</HomeHeadline>
        <FlatList
          style={{ flexGrow: 0 }}
          keyExtractor={this.articleKeyExtractor}
          contentContainerStyle={{
            paddingHorizontal: theme.SCREEN_PADDING,
            paddingBottom: theme.BASELINE * 2,
            paddingTop: 0
          }}
          data={this.state.filteredArticles}
          renderItem={this.renderArticle}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <OfferList />
        <HomeHeadline>My health</HomeHeadline>
        <HomeConentWrapper>
          <HealthCheck />
        </HomeConentWrapper>
        <HomeHeadline>activities to do this week</HomeHeadline>
        <HomeConentWrapper>
          <CheckList onPress={this.onCheckListItemPress} items={this.state.checkList} />
        </HomeConentWrapper>
      </Container>
    )
  }
}

export default Home
