import { AppRegistry, YellowBox } from 'react-native'
import AppProvider from './app/index'
import { name as appName } from './app.json'

// YellowBox.ignoreWarnings(['Remote debugger is in a background tab'])
console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => AppProvider)
