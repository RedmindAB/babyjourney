import React, { Component } from 'react'
import SearchField from '../../../components/common/SearchField'
import { HomeHeadline } from '../styled'
import { Animated, Dimensions } from 'react-native'
import { TopSearchContainer } from './styled'
import theme from '../../../theme'
import { connect } from 'react-redux'
import { ApplicationState } from '../../../store'

const { width: screenWidth } = Dimensions.get('screen')

const startWidth = 32
const endWidth = screenWidth - theme.SCREEN_PADDING * 2

type PropsFromState = ReturnType<typeof mapStateToProps>

type Props = PropsFromState

class TopSearch extends Component<Props> {
  animatedValue = new Animated.Value(0)

  state = {
    showInput: false
  }

  animate = (cb, show = true) => {
    if (!show) this.setState({ showInput: false })
    Animated.timing(this.animatedValue, {
      toValue: Number(show),
      duration: 500
    }).start(() => {
      if (show) {
        this.setState({ showInput: true }, () => setTimeout(() => cb(), 0))
      }
    })
  }

  onBlur = () => this.animate(false)

  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    })

    const width = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [startWidth, startWidth, endWidth]
    })

    const headlineTranslate = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, -endWidth]
    })

    return (
      <TopSearchContainer>
        <Animated.View
          style={{ position: 'absolute', left: 0, transform: [{ translateX: headlineTranslate }] }}
        >
          <HomeHeadline noMargin>week {this.props.user.selectedWeek} in social media</HomeHeadline>
        </Animated.View>
        <SearchField
          showInput={this.state.showInput}
          onPress={(cb, show) => this.animate(cb, show)}
          style={{ width, opacity }}
        />
      </TopSearchContainer>
    )
  }
}

const mapStateToProps = ({ user }: ApplicationState) => ({
  user
})

export default connect(mapStateToProps)(TopSearch)
