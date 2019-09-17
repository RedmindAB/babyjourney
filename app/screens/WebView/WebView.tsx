import React, { Component } from 'react'
import { View, Text } from 'react-native'
import WebView from 'react-native-webview'

import Container from '../../components/common/Container'
import { NavigationScreenProps } from 'react-navigation'

type Props = NavigationScreenProps<{ uri: string }>

class CustomWebView extends Component<Props> {
  render() {
    const { uri } = this.props.navigation.state.params
    return <WebView source={{ uri }} />
  }
}

export default CustomWebView
