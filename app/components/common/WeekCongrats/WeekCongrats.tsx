import React, { Component } from 'react'

import { WeekCongratsContainer, ConfettiContainer } from './styled'
import { Headline, Title, InfoText } from '../styled'
import { Icons } from '../../../assets'
import BabyPercentage from '../BabyPercentage'
import SquareButton from '../SquareButton'
import theme from '../../../theme'
import { connect } from 'react-redux'
import { ApplicationState } from '../../../store'
import { getWeekAndDay } from '../../../utils'

type PropsFromState = ReturnType<typeof mapStateToProps>

type Props = PropsFromState

class WeekCongrats extends Component<Props> {
  render() {
    const { weeks } = getWeekAndDay(this.props.user.dueDate)
    return (
      <WeekCongratsContainer>
        <Headline>Welcome to</Headline>
        <Title>Week {weeks}</Title>
        <ConfettiContainer>
          <Icons.Confetti />
        </ConfettiContainer>
        <InfoText style={{ fontSize: 16, fontWeight: '400', marginBottom: theme.BASELINE * 4 }}>
          Congartulations! This is how far you have progressed in your pregnancy
        </InfoText>
        <BabyPercentage />
        <SquareButton
          bigButton
          style={{ width: 160, marginTop: theme.BASELINE * 4 }}
          title="share"
          onPress={() => undefined}
        />
      </WeekCongratsContainer>
    )
  }
}

const mapStateToProps = ({ user }: ApplicationState) => ({ user })

export default connect(mapStateToProps)(WeekCongrats)
