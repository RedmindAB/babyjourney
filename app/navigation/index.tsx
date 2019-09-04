import { createAppContainer, NavigationScreenOptions } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation'
import Home from '../screens/Home'
import { screens, stacks } from './navigationConstants'
import { NavigationScreenProps } from 'react-navigation'
import { createStackNavigator } from 'react-navigation'
import theme from '../theme'

const defaultNavigationOptions = (
  { navigation }: NavigationScreenProps,
  customOptions: NavigationScreenOptions = {}
): NavigationScreenOptions => {
  const options: NavigationScreenOptions = {
    headerStyle: {
      backgroundColor: theme.secondary.color,
      borderBottomWidth: 1,
      shadowColor: 'transparent',
      elevation: 0
    },
    headerBackTitle: null,
    headerTintColor: theme.secondary.onColor
  }

  return { ...options, ...customOptions }
}

const HomeStack = createStackNavigator(
  {
    [screens.HOME]: Home
  },
  {
    defaultNavigationOptions
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    [stacks.HOME]: HomeStack
  },
  {
    swipeEnabled: false
  }
)

export default createAppContainer(TabNavigator)
