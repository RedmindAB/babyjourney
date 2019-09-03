import { AppRegistry } from 'react-native'
import AppProvider from './app/index'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => AppProvider)
