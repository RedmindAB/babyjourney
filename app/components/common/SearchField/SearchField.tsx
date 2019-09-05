import React, { Component } from 'react'
import { View, Text, Animated, TouchableWithoutFeedback, TextInput, Easing } from 'react-native'
import { Icons } from '../../../assets'
import theme from '../../../theme'

const startWidth = 32

class SearchField extends Component {
  animatedValue = new Animated.Value(0)
  textInput: TextInput

  state = {
    showInput: false
  }

  animate = (show = true) => {
    if (!show) this.setState({ showInput: false })

    Animated.timing(this.animatedValue, {
      toValue: Number(show),
      duration: 300
    }).start(() => {
      if (show) {
        this.setState({ showInput: true }, () => this.textInput.focus())
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
      outputRange: [startWidth, startWidth, 150]
    })

    return (
      <TouchableWithoutFeedback onPress={() => this.animate(true)}>
        <View style={{ position: 'relative', justifyContent: 'center' }}>
          <Animated.View
            style={{
              opacity,
              flexDirection: 'row',
              height: startWidth,
              width,
              borderWidth: 1,
              borderColor: theme.tertiary.color,
              borderRadius: startWidth / 2,
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {this.state.showInput && (
              <TextInput
                onBlur={this.onBlur}
                ref={r => (this.textInput = r)}
                style={{ flex: 1, marginLeft: 32, fontFamily: theme.fonts.Avenir }}
              />
            )}
          </Animated.View>
          <Icons.Search style={{ position: 'absolute', left: startWidth / 2 - 14 / 2 }} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default SearchField
