import { AppRegistry, YellowBox } from 'react-native'
import AppProvider from './app/index'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings(['Remote debugger is in a background tab'])

AppRegistry.registerComponent(appName, () => AppProvider)
