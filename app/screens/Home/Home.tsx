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
import { Filter } from '../../types'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type Props = PropsFromState & PropsFromDispatch & NavigationScreenProps

type State = {
  filters: Filter[]
  activeFilter: Filter
  checkList: CheckListItem[]
  filteredArticles: ArticleModel[]
}

class Home extends Component<Props, State> {
  scrollY = new Animated.Value(0)
  scrollView = React.createRef<any>()

  constructor(props: Props) {
    super(props)
    const filters = this.getFilters()
    const activeFilter = filters[0]
    this.state = {
      filters,
      activeFilter,
      filteredArticles: this.getFilteredArticles(filters[0]),
      checkList: [
        { title: 'Attend yoga classes', done: false },
        { title: 'Visit healthy food cooking class', done: false },
        { title: 'Talk to psychologist', done: false }
      ]
    }
  }

  componentDidUpdate(oldProps: Props) {
    if (oldProps.user.selectedWeek !== this.props.user.selectedWeek) {
      this.updateFilters()
    }
  }

  isNumber = (value: string) => {
    return /^\d+$/.test(value)
  }

  updateFilters = () => {
    const filters = this.getFilters()

    const { activeFilter } = this.state

    const isMissingOldFilter =
      !activeFilter || filters.every(filter => filter.value !== this.state.activeFilter.value)
    let newActiveFilter = this.state.activeFilter
    if (isMissingOldFilter) {
      if (this.isNumber(activeFilter.value)) {
        newActiveFilter = filters[1]
      } else {
        newActiveFilter = filters[0]
      }
      this.setFilter(newActiveFilter)
    }
    const filteredArticles = this.getFilteredArticles(newActiveFilter)
    this.setState({ filters, filteredArticles })
  }

  getFilters = (): Filter[] => {
    const filters = articles
      .filter(article => article.week === this.props.user.selectedWeek)
      .filter(article => article.category.length > 0)
      .reduce((acc, curr) => {
        const category = {
          value: curr.category.toLowerCase(),
          label: curr.category
        }
        if (acc.every(cat => cat.value !== category.value)) {
          acc.push(category)
        }
        return acc
      }, [])

    filters.unshift({
      label: 'All',
      value: 'all'
    })

    return filters
  }

  setFilter = (filter: Filter) => {
    const filteredArticles = this.getFilteredArticles(filter)
    this.setState({ activeFilter: filter, filteredArticles })
  }

  getFilteredArticles(filter: Filter) {
    const filteredByWeek = articles.filter(article => article.week === this.props.user.selectedWeek)
    return filter.value === 'all'
      ? filteredByWeek
      : filteredByWeek.filter(article => article.category.toLowerCase() === filter.value)
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
    const maxTopHeight = 217 + 130
    const minTopHeight = 119
    const maxValue = maxTopHeight - minTopHeight

    const translateY = this.scrollY.interpolate({
      inputRange: [0, maxValue],
      outputRange: [0, minTopHeight - maxTopHeight + getStatusBarHeight()],
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
            selectedValue={this.state.activeFilter.value}
            filters={this.state.filters}
          />
          <HomeTopContainer />
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
          <SquareButton
            style={{ alignSelf: 'center', marginBottom: theme.BASELINE * 2, width: 100 }}
            title="VIEW ALL"
            onPress={() => undefined}
          />
          <WhatHappensNow style={{ height: 224 }} />
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

const mapStateToProps = ({ bottomTabBar, user }: ApplicationState) => ({ bottomTabBar, user })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  hideBottomTabBar: () => dispatch(hideBottomTabBar()),
  showBottomTabBar: () => dispatch(showBottomTabBar())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
