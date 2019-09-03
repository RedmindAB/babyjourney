import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'

import Container from '../../components/common/Container'
import FilterList from '../../components/common/FilterList'

import styles from './styles'
import { View } from 'react-native'
import ArticleButton from '../../components/common/ArticleButton'
import { variables } from '../../theme'
import { ArticleModel } from '../../components/common/ArticleButton/ArticleButton'
import { string } from 'prop-types'
import { FlatList } from 'react-native-gesture-handler'

type Props = NavigationScreenProps

type State = {
  activeFilter: string
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
    activeFilter: this.filters[0].value
  }

  setFilter = (filter: any) => {
    this.setState({ activeFilter: filter.value })
  }

  articleKeyExtractor = (item: ArticleModel) => item.title

  renderArticle = ({ item, index }) => {
    const style = index === this.articles.length - 1 ? {} : { marginRight: variables.BASELINE * 2 }
    return <ArticleButton article={item} style={style} />
  }

  render() {
    return (
      <Container style={styles.container}>
        <FilterList
          onPress={this.setFilter}
          selectedValue={this.state.activeFilter}
          filters={this.filters}
        />
        <FlatList
          keyExtractor={this.articleKeyExtractor}
          contentContainerStyle={{ padding: variables.BASELINE * 2 }}
          data={this.articles}
          renderItem={this.renderArticle}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <View style={{ flex: 1, padding: variables.BASELINE * 2 }} />
      </Container>
    )
  }
}

export default Home
