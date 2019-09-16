import React, { Component } from 'react'

import { ViewStyle, View } from 'react-native'
import {
  WhatHappensNowContainer,
  IconsRowContainer,
  IconContainer,
  IconColumn,
  iconContainerSize
} from './styled'
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { screens } from '../../../navigation/navigationConstants'
import LinearGradient from 'react-native-linear-gradient'
import { Headline, InfoText } from '../styled'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icons } from '../../../assets'
import theme from '../../../theme'

type OwnProps = {
  style?: ViewStyle
}

type Props = OwnProps & NavigationScreenProps

class WhatHappensNow extends Component<Props> {
  articleContext: string[] = ['Baby', 'Mother', 'Partner']

  getIcon = (context: string) => {
    switch (context) {
      case 'Baby':
        return Icons.BabyNow
      case 'Mother':
        return Icons.MotherNow
      default:
        return Icons.PartnerNow
    }
  }

  goToWhatHappensNow = (startContext: string) => {
    this.props.navigation.navigate(screens.WHAT_HAPPENS_NOW, { startContext })
  }

  renderButtons() {
    return this.articleContext.map((context, index) => {
      const justifyContent = index % 2 > 0 ? 'flex-start' : 'flex-end'
      const onPress = () => this.goToWhatHappensNow(context)
      const Icon = this.getIcon(context)
      return (
        <IconColumn
          key={context}
          noMargin={index === 0}
          style={{ justifyContent, alignItems: 'center' }}
        >
          <IconContainer>
            <TouchableOpacity
              onPress={onPress}
              style={{
                width: iconContainerSize,
                height: iconContainerSize,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Icon width={32} height={40} />
            </TouchableOpacity>
          </IconContainer>
          <InfoText style={{ marginTop: theme.BASELINE, fontSize: 12 }}>
            {context.toUpperCase()}
          </InfoText>
        </IconColumn>
      )
    })
  }

  render() {
    return (
      <LinearGradient
        style={this.props.style}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#fff6cc', '#ffe9e9']}
      >
        <WhatHappensNowContainer>
          <Headline noMargin style={{ alignSelf: 'center' }}>
            What happens this week?
          </Headline>
          <IconsRowContainer>{this.renderButtons()}</IconsRowContainer>
        </WhatHappensNowContainer>
      </LinearGradient>
    )
  }
}

export default withNavigation(WhatHappensNow)
