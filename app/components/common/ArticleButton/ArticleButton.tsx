import React, { Component } from 'react'
import { View, Text, Image, ViewStyle, ViewProps } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

export type ArticleModel = {
  uri: string
  title: string
  author: string
}

type OwnProps = {
  article: ArticleModel
}

type Props = OwnProps & ViewProps

class ArticleButton extends Component<Props> {
  render() {
    const { article, style } = this.props
    return (
      <View style={[ styles.container, style  ]}>
        <TouchableOpacity>
          <Image style={styles.image} source={{ uri: article.uri }} />
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.author}>{article.author}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ArticleButton
