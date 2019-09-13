import React, { Component } from 'react'
import Container from '../../components/common/Container'
import SquareButton from '../../components/common/SquareButton'
import { NavigationScreenProps } from 'react-navigation'
import { screens } from '../../navigation/navigationConstants'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native'
import { Headline, InfoText } from '../../components/common/styled'
import {
  InteresPickerContainer,
  InterestPickerTopContainer,
  InterestPickerTopicsContainer
} from './styled'
import theme from '../../theme'
import { Topic } from '../../store/user/types'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setTopics } from '../../store/user/actions'

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type State = {
  topics: Topic[]
}

type Props = NavigationScreenProps & PropsFromDispatch

class InterestPicker extends Component<Props, State> {
  state: State = {
    topics: [
      { value: 'fashion', label: 'Fashion', selected: false },
      { value: 'lifestyle', label: 'Lifestyle', selected: false },
      { value: 'diet-health', label: 'Diet - Health', selected: false },
      { value: 'exercise', label: 'Exercise', selected: false },
      { value: 'decor', label: 'Decor', selected: false },
      { value: 'baby', label: 'Baby', selected: false },
      { value: 'purchases', label: 'Purchases', selected: false },
      { value: 'siblings', label: 'Siblings', selected: false },
      { value: 'family', label: 'Family', selected: false },
      { value: 'traveling', label: 'Traveling', selected: false },
      { value: 'party', label: 'Party', selected: false },
      { value: 'recipes', label: 'Recipes', selected: false },
      { value: 'technology', label: 'Technology', selected: false },
      { value: 'career', label: 'Career', selected: false },
      { value: 'restaurants', label: 'Restaurants', selected: false }
    ]
  }

  onNextPress = () => {
    const prettyTopics = this.state.topics.map(({ label, value }) => ({ label, value }))
    this.props.setTopics(prettyTopics)
    this.props.navigation.navigate(screens.DUE_DATE_PICKER)
  }

  onTopicPress = (index: number) => {
    const topics = [...this.state.topics]
    const topic = topics[index]
    topic.selected = !topic.selected
    this.setState({ topics })
  }

  isButtonDisabled = () => this.state.topics.filter(topic => topic.selected).length < 3

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
            <InfoText normal>{topic.label}</InfoText>
          </LinearGradient>
        </TouchableOpacity>
      )
    })
  }

  render() {
    console.log(this.isButtonDisabled())
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
              <Headline>what are your interests?</Headline>
              <InfoText>Choose at least 3 topics</InfoText>
            </InterestPickerTopContainer>

            <InterestPickerTopicsContainer>{this.renderTopics()}</InterestPickerTopicsContainer>

            <SquareButton
              disabled={this.isButtonDisabled()}
              bigButton
              title="NEXT"
              onPress={this.onNextPress}
            />
          </InteresPickerContainer>
        </Container>
      </LinearGradient>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTopics: (topics: Topic[]) => dispatch(setTopics(topics))
})

export default connect(
  null,
  mapDispatchToProps
)(InterestPicker)
