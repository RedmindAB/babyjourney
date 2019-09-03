import React, {Component} from 'react'
import {View, StatusBar, StyleSheet} from 'react-native'

import AppContainer from './navigation'
import {colors} from './theme'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.secondary} />
        <AppContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: colors.secondary, flex: 1},
})

export default App
