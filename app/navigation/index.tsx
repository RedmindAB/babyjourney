import { createAppContainer, NavigationScreenOptions } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation'
import Home from '../screens/Home'
import { screens, stacks } from './navigationConstants'
import { NavigationScreenProps } from 'react-navigation'
import { colors } from '../theme'
import { createStackNavigator } from 'react-navigation'

const defaultNavigationOptions = (
  { navigation }: NavigationScreenProps,
  customOptions: NavigationScreenOptions = {}
): NavigationScreenOptions => {
  const options: NavigationScreenOptions = {
    headerStyle: {
      backgroundColor: colors.secondary,
      borderBottomWidth: 1,
      shadowColor: 'transparent',
      elevation: 0
    },
    headerBackTitle: null,
    headerTintColor: colors.secondaryOn
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
