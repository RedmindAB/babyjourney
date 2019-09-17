import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Container from '../../components/common/Container'
import SquareButton from '../../components/common/SquareButton'
import { screens, stacks } from '../../navigation/navigationConstants'
import { Headline, InfoText } from '../../components/common/styled'
import {
  InteresPickerContainer,
  InterestPickerTopContainer,
  InterestPickerTopicsContainer
} from './styled'
import theme from '../../theme'
import { Topic } from '../../store/user/types'
import { setTopics, setHasSeenOnboarding } from '../../store/user/actions'
import i18n, { lang } from '../../translations'

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type State = {
  topics: Topic[]
}

type Props = NavigationScreenProps & PropsFromDispatch

class InterestPicker extends Component<Props, State> {
  state: State = {
    topics: [
      { value: 'fashion', selected: false },
      { value: 'lifestyle', selected: false },
      { value: 'diet-health', selected: false },
      { value: 'exercise', selected: false },
      { value: 'decor', selected: false },
      { value: 'baby', selected: false },
      { value: 'purchases', selected: false },
      { value: 'siblings', selected: false },
      { value: 'family', selected: false },
      { value: 'traveling', selected: false },
      { value: 'party', selected: false },
      { value: 'recipes', selected: false },
      { value: 'technology', selected: false },
      { value: 'career', selected: false },
      { value: 'restaurants', selected: false }
    ]
  }

  onNextPress = () => {
    const prettyTopics = this.state.topics.map(({ value }) => ({ value }))
    this.props.setTopics(prettyTopics)
    this.props.setHasSeenOnboarding()
    this.props.navigation.navigate(stacks.HOME)
  }

  onTopicPress = (index: number) => {
    const topics = [...this.state.topics]
    const topic = topics[index]
    topic.selected = !topic.selected
    this.setState({ topics })
  }

  renderTopics() {
    return this.state.topics.map((topic, index) => {
      const colors = topic.selected ? ['#ffd296', '#fe8a8a'] : ['#ffdfb4', '#ffc0c0']
      const onPress = () => this.onTopicPress(index)
      return (
        <TouchableOpacity key={topic.value} onPress={onPress}>
          <LinearGradient
            style={{
              marginVertical: 6,
              marginHorizontal: 6,
              paddingVertical: theme.BASELINE,
              paddingHorizontal: theme.BASELINE * 2,
              alignItems: 'center',
              minWidth: 88,
              borderRadius: 9999
            }}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={colors}
          >
            <InfoText normal>{i18n.translate(lang.interestPicker.topics[topic.value])}</InfoText>
          </LinearGradient>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#ffe9e9', '#fff6cc']}
      >
        <Container style={{ backgroundColor: 'transparent' }}>
          <InteresPickerContainer>
            <InterestPickerTopContainer>
              <Headline>{i18n.translate(lang.interestPicker.title)}</Headline>
              <InfoText>{i18n.translate(lang.interestPicker.subTitle)}</InfoText>
            </InterestPickerTopContainer>

            <InterestPickerTopicsContainer>{this.renderTopics()}</InterestPickerTopicsContainer>

            <SquareButton
              bigButton
              title={i18n.translate(lang.interestPicker.buttonText)}
              onPress={this.onNextPress}
            />
          </InteresPickerContainer>
        </Container>
      </LinearGradient>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTopics: (topics: Topic[]) => dispatch(setTopics(topics)),
  setHasSeenOnboarding: () => dispatch(setHasSeenOnboarding(true))
})

export default connect(
  null,
  mapDispatchToProps
)(InterestPicker)
