import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'

import AppContainer from './navigation'
import theme from './theme'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={theme.secondary.color} />
        <AppContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: theme.secondary.color, flex: 1 }
})

export default App
