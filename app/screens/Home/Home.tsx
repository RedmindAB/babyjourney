import React, { Component, Fragment } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { FlatList } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import FilterList from '../../components/common/FilterList'
import ArticleButton from '../../components/common/ArticleButton'
import { ArticleModel } from '../../components/common/ArticleButton/ArticleButton'
import theme from '../../theme'
import OfferList from '../../components/common/OfferList'
import { HomeHeadline, HomeConentWrapper as HomeContentWrapper, HomeTopContainer } from './styled'
import CheckList from '../../components/common/CheckList'
import { CheckListItem } from '../../components/common/CheckList/CheckList'
import HealthCheck from '../../components/common/HealthCheck'
import { articles } from './mockArticlesData'
import SquareButton from '../../components/common/SquareButton'
import TopSearch from './TopSearch/TopSearch'
import WhatHappensNow from '../../components/common/WhatHappensNow'
import ForumResponses from '../../components/common/ForumResponses'
import { Animated, View } from 'react-native'
import WeekDisplay from '../../components/common/WeekDisplay'
import ProgressDropDown from '../../components/common/ProgressDropDown'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { ApplicationState } from '../../store'
import { hideBottomTabBar, showBottomTabBar } from '../../store/bottomTabBar/actions'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type Props = PropsFromState & PropsFromDispatch & NavigationScreenProps

type State = {
  activeFilter: string
  checkList: CheckListItem[]
  filteredArticles: ArticleModel[]
}

class Home extends Component<Props, State> {
  scrollY = new Animated.Value(0)
  scrollView = React.createRef<any>()

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

  onExpand = () => {
    this.scrollView.current.getNode().scrollTo({ y: 0, animated: false })
  }

  render() {
    const maxTopHeight = 217 + 119
    const minTopHeight = 119 + getStatusBarHeight()
    const maxValue = maxTopHeight - minTopHeight

    const translateY = this.scrollY.interpolate({
      inputRange: [0, maxValue],
      outputRange: [0, minTopHeight - maxTopHeight],
      extrapolate: 'clamp'
    })

    const progressDropdownTranslateY = this.scrollY.interpolate({
      inputRange: [0, maxValue - 50, maxValue],
      outputRange: [0, 0, -getStatusBarHeight()],
      extrapolate: 'clamp'
    })

    return (
      <Fragment>
        <Animated.View
          style={{
            transform: [{ translateY }],
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1
          }}
        >
          <ProgressDropDown
            style={{ zIndex: 1, paddingTop: getStatusBarHeight() + theme.BASELINE * 2 }}
            animatedStyle={{ transform: [{ translateY: progressDropdownTranslateY }] }}
            onExpand={this.onExpand}
          />
          <WeekDisplay />
        </Animated.View>
        <Animated.ScrollView
          contentContainerStyle={{ paddingBottom: theme.SCREEN_PADDING }}
          showsVerticalScrollIndicator={false}
          ref={this.scrollView}
          scrollEventThrottle={1}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.scrollY } } }], {
            useNativeDriver: true
          })}
        >
          <View style={{ height: maxTopHeight }} />
          <HomeTopContainer>
            <TopSearch />
          </HomeTopContainer>
          <FilterList
            onPress={this.setFilter}
            selectedValue={this.state.activeFilter}
            filters={this.filters}
          />
          <WhatHappensNow style={{ margin: theme.SCREEN_PADDING, marginBottom: 0 }} />
          <HomeTopContainer>
            <HomeHeadline noMargin>stories</HomeHeadline>
            <SquareButton title="VIEW ALL" onPress={() => undefined} />
          </HomeTopContainer>

          <FlatList
            style={{ flexGrow: 0, backgroundColor: 'transparent', overflow: 'visible' }}
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
          <HomeContentWrapper>
            <HealthCheck />
          </HomeContentWrapper>
          <HomeHeadline>activities to do this week</HomeHeadline>
          <HomeContentWrapper>
            <CheckList onPress={this.onCheckListItemPress} items={this.state.checkList} />
          </HomeContentWrapper>
          <HomeContentWrapper
            style={{
              alignItems: 'center',
              marginTop: theme.BASELINE
            }}
          >
            <SquareButton
              style={{ alignSelf: 'baseline' }}
              title="Go to activities"
              onPress={() => undefined}
            />
          </HomeContentWrapper>
          <HomeHeadline>forum</HomeHeadline>
          <HomeContentWrapper>
            <ForumResponses />
          </HomeContentWrapper>
        </Animated.ScrollView>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ bottomTabBar }: ApplicationState) => ({ bottomTabBar })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  hideBottomTabBar: () => dispatch(hideBottomTabBar()),
  showBottomTabBar: () => dispatch(showBottomTabBar())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
