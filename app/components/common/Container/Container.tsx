import React from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'

import styles from './styles'
import WeekDisplay from '../WeekDisplay'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

type OwnProps = {
  withoutMargin?: boolean
  unsafe?: boolean
  style?: any
  children?: any
  weekHeader?: boolean
  withHeader?: boolean
}
type Props = OwnProps

const Container = ({ children, style, withoutMargin, unsafe, weekHeader, withHeader }: Props) => {
  const Wrapper = unsafe ? View : SafeAreaView
  const wrapperStyles: any[] = []
  const contentContainerStyles: any[] = []

  if (withoutMargin) {
    contentContainerStyles.push({ padding: 0, margin: 0 })
  }

  const paddingTop = withHeader ? 0 : getStatusBarHeight()

  return (
    <View style={{ flex: 1 }}>
      {weekHeader && <WeekDisplay style={{ paddingTop, zIndex: 1 }} />}
      <Wrapper style={[styles.container, ...wrapperStyles, style]}>
        <ScrollView
          bounces={false}
          contentContainerStyle={[styles.contentContainer, ...contentContainerStyles, style]}
        >
          {children}
        </ScrollView>
      </Wrapper>
    </View>
  )
}

export default Container
