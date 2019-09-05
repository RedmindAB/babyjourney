import React, { Component } from 'react'
import { View, Animated, TouchableWithoutFeedback, TextInput, Dimensions } from 'react-native'
import { Icons } from '../../../assets'
import theme from '../../../theme'

const startWidth = 32

type OwnProps = {
  style?: any
  onPress: (cb, show) => void
  showInput: boolean
}

type Props = OwnProps

class SearchField extends Component<Props> {
  textInput: TextInput

  onBlur = () => this.props.onPress(null, false)

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.onPress(() => this.textInput.focus(), true)}
      >
        <View style={{ position: 'relative', justifyContent: 'center' }}>
          <Animated.View
            style={[
              {
                flexDirection: 'row',
                height: startWidth,
                borderWidth: 1,
                borderColor: theme.tertiary.color,
                borderRadius: startWidth / 2,
                alignItems: 'center',
                justifyContent: 'space-between'
              },
              this.props.style
            ]}
          >
            {this.props.showInput && (
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
