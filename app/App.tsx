import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import { store } from './store/configureStore'
import theme from './theme'
import { Provider } from 'react-redux'
import AppWrapper from './AppWrapper'

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor={theme.secondary.color} />
          <AppWrapper />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: theme.secondary.color, flex: 1 }
})

export default App
