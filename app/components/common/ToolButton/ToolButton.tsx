import React, { Component } from 'react'
import { Card, InfoText } from '../styled'
import { ViewStyle, Dimensions, View, TextStyle, TouchableOpacity } from 'react-native'
import theme from '../../../theme'
import { Icons } from '../../../assets'
import i18n, { lang } from '../../../translations'
import Tools from '../../../screens/Tools'

const { width } = Dimensions.get('screen')

const iconSize = 36

export type Tool = {
  label: string
  icon: string
}

type OwnProps = {
  tool: Tool
  style: ViewStyle
  onPress: () => void
}

type Props = OwnProps

class ToolButton extends Component<Props> {
  render() {
    const { tool, style, onPress } = this.props
    const margin = (style && parseInt(style.margin.toString())) || (theme.BASELINE * 1.5) / 2
    const size = width / 3 - margin * 3
    const Icon = Icons[tool.icon]
    return (
      <TouchableOpacity onPress={onPress}>
        <Card
          smallPadding
          style={[{ width: size, height: size, justifyContent: 'space-between' }, style]}
        >
          <View style={{ height: '60%', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Icon width={iconSize} height={iconSize} />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 0
            }}
          >
            <InfoText style={{ textAlign: 'center', flex: 0, fontSize: 12, lineHeight: 14 }}>
              {i18n.t(lang.tools.buttons[tool.label])}
            </InfoText>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }
}

export default ToolButton
