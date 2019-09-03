import React from 'react'
import {SafeAreaView, View, ScrollView} from 'react-native'

import styles from './styles'

type OwnProps = {
  withoutMargin?: boolean
  unsafe?: boolean
  style?: any
  children?: any
}
type Props = OwnProps

const Container = ({children, style, withoutMargin, unsafe}: Props) => {
  const Wrapper = unsafe ? View : SafeAreaView
  const wrapperStyles: any[] = []
  const contentContainerStyles: any[] = []

  if (withoutMargin) {
    contentContainerStyles.push({padding: 0, margin: 0})
  }

  return (
    <Wrapper style={[styles.container, ...wrapperStyles, style]}>
      <ScrollView
        bounces={false}
        contentContainerStyle={[styles.contentContainer, ...contentContainerStyles, style]}>
        {children}
      </ScrollView>
    </Wrapper>
  )
}

export default Container
