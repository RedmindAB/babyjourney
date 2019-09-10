import React, { Component } from 'react'
import Container from '../../components/common/Container'
import SwitchList from '../../components/common/SwitchList'
import { NavigationScreenProps } from 'react-navigation'
import { InfoText, IconCircleContainer } from '../../components/common/styled'
import theme from '../../theme'
import { Icons } from '../../assets'
import weekArticles from './weekArticles'
import { connect } from 'react-redux'
import { ApplicationState } from '../../store'
import { ViewStyle } from 'react-native'

type PropsFromState = ReturnType<typeof mapStateToProps>

type Props = NavigationScreenProps<{ startContext: string }> & PropsFromState

type State = {
  articleContext: string[]
  selectedIndex: number
}

class WhatHappensNowScreen extends Component<Props, State> {
  state: State = {
    articleContext: ['Baby', 'Mother', 'Partner'],
    selectedIndex: 0
  }

  icons = [Icons.BabyNow, Icons.MotherNow, Icons.PartnerNow]

  componentDidMount() {
    const { params } = this.props.navigation.state
    if (params && params.startContext) {
      const selectedIndex = this.state.articleContext.indexOf(params.startContext)
      this.setState({ selectedIndex })
    }
  }
  selectOption = index => {
    this.setState({ selectedIndex: index })
  }

  getCurrentContext = () => this.state.articleContext[this.state.selectedIndex]

  renderArticle() {
    const weekArticle = weekArticles.find(
      weekArticle => weekArticle.week === this.props.user.selectedWeek
    )
    const article = weekArticle.categories.find(
      category => category.context.toLowerCase() === this.getCurrentContext().toLowerCase()
    )
    return article.sections.map((section, index) => {
      const style = index > 0 ? ({ marginTop: theme.BASELINE * 3 } as ViewStyle) : {}
      return (
        <InfoText style={style} key={index}>
          {section}
        </InfoText>
      )
    })
  }

  render() {
    const Icon = this.icons[this.state.selectedIndex]
    return (
      <Container weekHeader withHeader>
        <SwitchList
          onPress={this.selectOption}
          selectedIndex={this.state.selectedIndex}
          options={this.state.articleContext}
        />

        <IconCircleContainer
          style={{
            alignSelf: 'center',
            marginVertical: theme.BASELINE * 6,
            shadowOpacity: 0.47,
            shadowColor: '#ff9d9e',
            height: 120,
            width: 120,
            borderRadius: 60
          }}
        >
          <Icon width={56} height={56} />
        </IconCircleContainer>
        {this.renderArticle()}
      </Container>
    )
  }
}
const mapStateToProps = ({ user }: ApplicationState) => ({ user })
export default connect(mapStateToProps)(WhatHappensNowScreen)
