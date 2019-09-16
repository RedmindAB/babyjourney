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
import i18n, { lang } from '../../../translations'

type PropsFromState = ReturnType<typeof mapStateToProps>

type Props = PropsFromState

class WeekCongrats extends Component<Props> {
  render() {
    const { weeks } = getWeekAndDay(this.props.user.dueDate)
    return (
      <WeekCongratsContainer>
        <Headline>{i18n.translate(lang.weekCongratsModal.title)}</Headline>
        <Title>{i18n.translate(lang.weekCongratsModal.subTitle, { week: weeks })}</Title>
        <ConfettiContainer>
          <Icons.Confetti />
        </ConfettiContainer>
        <InfoText style={{ fontSize: 16, fontWeight: '400', marginBottom: theme.BASELINE * 4 }}>
          {i18n.t(lang.weekCongratsModal.congratulationsText)}
        </InfoText>
        <BabyPercentage />
        <SquareButton
          bigButton
          style={{ width: 160, marginTop: theme.BASELINE * 4 }}
          title={i18n.t(lang.weekCongratsModal.buttonText)}
          onPress={() => undefined}
        />
      </WeekCongratsContainer>
    )
  }
}

const mapStateToProps = ({ user }: ApplicationState) => ({ user })

export default connect(mapStateToProps)(WeekCongrats)
