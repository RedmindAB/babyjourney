import React, { Component } from 'react'
import { View, ViewStyle } from 'react-native'
import {
  PercentageBarContainer,
  PercentageBar,
  PercentageBarDot,
  PercentageBarLine,
  PercentageBarNumberContainer,
  PercentageText,
  BabyLogoWhiteBorder,
  BabyLogo,
  percentageNumberContainerWidth
} from './styled'
import { Icons } from '../../../assets'
import { getPercentage } from '../../../utils'
import { connect } from 'react-redux'
import { ApplicationState } from '../../../store'
import theme from '../../../theme'

type PropsFromState = ReturnType<typeof mapStateToProps>

type Props = PropsFromState

type State = {
  percentageX: number
}

class BabyPercentage extends Component<Props, State> {
  percentageContainerRef = React.createRef<View>()

  state: State = {
    percentageX: null
  }

  onPercentageContainerLayout = event => {
    this.percentageContainerRef.current.measure((fx, fy, width, height, px, py) => {
      console.log(px, py)
      if (px < 0) {
        this.setState({ percentageX: theme.BASELINE * 2 })
      }
    })
  }

  render() {
    const { dueDate } = this.props.user
    const { percentageX } = this.state
    const percentage = getPercentage(dueDate)
    const percentageStyle = !!percentageX ? { left: percentageX } : {}
    return (
      <View style={{ position: 'relative', width: '100%' }}>
        <PercentageBarContainer>
          <PercentageBar style={{ width: `${percentage}%` }}>
            <PercentageBarDot />
            <PercentageBarLine />
            <PercentageBarNumberContainer
              ref={this.percentageContainerRef}
              onLayout={this.onPercentageContainerLayout}
              style={[
                {
                  transform: [{ translateX: percentageNumberContainerWidth / 2 - 4 }]
                } as ViewStyle,
                percentageStyle
              ]}
            >
              <PercentageText>{percentage}%</PercentageText>
            </PercentageBarNumberContainer>
          </PercentageBar>
        </PercentageBarContainer>
        <BabyLogoWhiteBorder>
          <BabyLogo>
            <Icons.Baby />
          </BabyLogo>
        </BabyLogoWhiteBorder>
      </View>
    )
  }
}

const mapStateToProps = ({ user }: ApplicationState) => ({ user })

export default connect(mapStateToProps)(BabyPercentage)
