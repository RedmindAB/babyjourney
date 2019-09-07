import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'

import { store } from './store/configureStore'
import AppContainer from './navigation'
import theme from './theme'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor={theme.secondary.color} />
          <AppContainer />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: theme.secondary.color, flex: 1 }
})

export default App
