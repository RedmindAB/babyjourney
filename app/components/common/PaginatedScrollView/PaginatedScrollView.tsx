import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { PageDotContainer, PageDot } from '../OfferList/styled'

type OwnProps = {}

type Props = OwnProps

type State = {
  page: number
}

class PaginatedScrollView extends Component<Props, State> {
  timeout: any

  state: State = {
    page: 0
  }

  setScroll = event => {
    const contentOffset = event.nativeEvent.contentOffset
    const viewSize = event.nativeEvent.layoutMeasurement
    const page = Math.floor(contentOffset.x / viewSize.width)
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => this.setState({ page }), 50)
  }

  renderDots = () => {
    const list = React.Children.toArray(this.props.children)
    return list.map((child: any, index: number) => (
      <PageDot
        active={index === this.state.page}
        key={child.key}
        last={index === list.length - 1}
      />
    ))
  }

  render() {
    console.log(this.state.page)
    return (
      <View>
        <ScrollView
          style={{ backgroundColor: 'transparent', overflow: 'visible' }}
          scrollEventThrottle={2000}
          onScroll={this.setScroll}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {this.props.children}
        </ScrollView>
        <PageDotContainer>{this.renderDots()}</PageDotContainer>
      </View>
    )
  }
}

export default PaginatedScrollView
