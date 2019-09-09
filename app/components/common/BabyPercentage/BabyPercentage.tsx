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

type PropsFromState = ReturnType<typeof mapStateToProps>

type Props = PropsFromState

class BabyPercentage extends Component<Props> {
  render() {
    const { dueDate } = this.props.user
    const percentage = getPercentage(dueDate)
    return (
      <View style={{ position: 'relative' }}>
        <PercentageBarContainer>
          <PercentageBar style={{ width: `${percentage}%` }}>
            <PercentageBarDot />
            <PercentageBarLine />
            <PercentageBarNumberContainer
              style={
                {
                  transform: [{ translateX: percentageNumberContainerWidth / 2 - 4 }]
                } as ViewStyle
              }
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
