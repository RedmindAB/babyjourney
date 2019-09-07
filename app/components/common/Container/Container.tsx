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
}
type Props = OwnProps

const Container = ({ children, style, withoutMargin, unsafe, weekHeader }: Props) => {
  const Wrapper = unsafe ? View : SafeAreaView
  const wrapperStyles: any[] = []
  const contentContainerStyles: any[] = []

  if (withoutMargin) {
    contentContainerStyles.push({ padding: 0, margin: 0 })
  }

  return (
    <View>
      {weekHeader && <WeekDisplay style={{ paddingTop: getStatusBarHeight() }} />}
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
