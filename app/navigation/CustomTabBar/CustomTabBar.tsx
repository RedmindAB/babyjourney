import React, { Component } from 'react'
import { Animated, ViewStyle } from 'react-native'
import { BottomTabBar, NavigationScreenConfigProps } from 'react-navigation'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { connect } from 'react-redux'
import { ApplicationState } from '../../store'

type PropsFromState = ReturnType<typeof mapStateToProps>

const TAB_BAR_OFFSET = -60 + -getBottomSpace()

type State = {
  offset: Animated.Value
}

type Props = PropsFromState & NavigationScreenConfigProps

class CustomBottomTabBar extends Component<Props, State> {
  hiddenOffset = TAB_BAR_OFFSET
  visibleOffeset = 0
  state = {
    offset: new Animated.Value(0)
  }

  componentDidUpdate(oldProps: Props) {
    const wasVisible = oldProps.bottomTabBar.visible
    const isVisible = this.props.bottomTabBar.visible

    if (wasVisible && !isVisible) {
      Animated.timing(this.state.offset, { toValue: TAB_BAR_OFFSET, duration: 200 }).start()
    } else if (isVisible && !wasVisible) {
      Animated.timing(this.state.offset, { toValue: 0, duration: 200 }).start()
    }
  }

  render() {
    const offset = this.props.bottomTabBar.visible ? this.visibleOffeset : this.hiddenOffset
    const style: ViewStyle = { bottom: offset }
    return (
      // @ts-ignore
      <BottomTabBar {...this.props} style={[styles.container, style]} />
    )
  }
}

const styles = {
  container: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    elevation: 8
  }
}

const mapStateToProps = ({ bottomTabBar }: ApplicationState) => ({ bottomTabBar })

export default connect(mapStateToProps)(CustomBottomTabBar)
