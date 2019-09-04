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
import { HomeHeadline, HomeConentWrapper } from './styled'
import CheckList from '../../components/common/CheckList'
import { CheckListItem } from '../../components/common/CheckList/CheckList'

type Props = NavigationScreenProps

type State = {
  activeFilter: string
  checkList: CheckListItem[]
}

class Home extends Component<Props, State> {
  articles: ArticleModel[] = [
    {
      title: 'Expectations in the first trimester of pregnancy',
      author: 'Jennifer Smith',
      uri:
        'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2016/04/pregnancy-week-by-week-3-920x581.jpg'
    },
    {
      title: 'Expectations in the first trimester of pregnancy',
      author: 'Jennifer Smith',
      uri:
        'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2016/04/pregnancy-week-by-week-3-920x581.jpg'
    },
    {
      title: 'Expectations in the first trimester of pregnancy',
      author: 'Jennifer Smith',
      uri:
        'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2016/04/pregnancy-week-by-week-3-920x581.jpg'
    },
    {
      title: 'Expectations in the first trimester of pregnancy',
      author: 'Jennifer Smith',
      uri:
        'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2016/04/pregnancy-week-by-week-3-920x581.jpg'
    }
  ]

  filters = [
    { label: 'All', value: 'all' },
    { label: 'Lifestyle', value: 'lifestyle' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Cuisine', value: 'cuisine' },
    { label: 'Sports', value: 'sports' }
  ]

  state: State = {
    activeFilter: this.filters[0].value,
    checkList: [
      { title: 'Attend yoga classes', done: false },
      { title: 'Visit healthy food cooking class', done: false },
      { title: 'Talk to psychologist', done: false }
    ]
  }

  setFilter = (filter: any) => {
    this.setState({ activeFilter: filter.value })
  }

  articleKeyExtractor = (_: ArticleModel, index: number) => index.toString()

  renderArticle = ({ item, index }) => {
    const style = index === this.articles.length - 1 ? {} : { marginRight: theme.BASELINE * 2 }
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
        <HomeHeadline>week 15 in social media</HomeHeadline>
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
          data={this.articles}
          renderItem={this.renderArticle}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <OfferList />
        <HomeHeadline>My health</HomeHeadline>
        <HomeHeadline>activites to do this week</HomeHeadline>
        <HomeConentWrapper>
          <CheckList onPress={this.onCheckListItemPress} items={this.state.checkList} />
        </HomeConentWrapper>
      </Container>
    )
  }
}

export default Home
