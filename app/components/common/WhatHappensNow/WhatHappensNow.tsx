import React, { Component } from 'react'

import { ViewStyle } from 'react-native'
import { WhatHappensNowContainer } from './styled'
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { screens } from '../../../navigation/navigationConstants'
import Button from '../Button'

type OwnProps = {
  style?: ViewStyle
}

type Props = OwnProps & NavigationScreenProps

class WhatHappensNow extends Component<Props> {
  articleContext: string[] = ['Baby', 'Mother', 'Partner']
  goToWhatHappensNow = (startContext: string) => {
    this.props.navigation.navigate(screens.WHAT_HAPPENS_NOW, { startContext })
  }

  renderButtons() {
    return this.articleContext.map(context => {
      const onPress = () => this.goToWhatHappensNow(context)
      return <Button key={context} style={{ width: 100 }} title={context} onPress={onPress} />
    })
  }

  render() {
    return <WhatHappensNowContainer>{this.renderButtons()}</WhatHappensNowContainer>
  }
}

export default withNavigation(WhatHappensNow)
