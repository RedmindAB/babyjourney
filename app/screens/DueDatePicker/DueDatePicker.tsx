import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setHasSeenOnboarding, setDueDate } from '../../store/user/actions'
import { Dispatch } from 'redux'
import { ApplicationState } from '../../store'
import { Title } from '../../components/common/styled'
import Container from '../../components/common/Container'
import { screens } from '../../navigation/navigationConstants'
import { NavigationScreenProps } from 'react-navigation'
import { DueDatePickerContainer, PickerWrapper } from './styled'
import theme from '../../theme'
import DatePicker from 'react-native-date-picker'
import SquareButton from '../../components/common/SquareButton'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type Props = NavigationScreenProps & PropsFromDispatch & PropsFromState

class DueDatePicker extends Component<Props> {
  minDate = new Date(new Date().setDate(new Date().getDate() - 7 * 40))
  maxDate = new Date()

  state = {
    date: new Date()
  }

  selectDate = () => {
    const dueDate = new Date(this.state.date)
    dueDate.setDate(this.state.date.getDate() + 7 * 40)
    this.props.setDueDate(dueDate)
    this.props.setHasSeenOnboarding()
    this.props.navigation.navigate(screens.HOME)
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#ffe9e9' }}>
        <DueDatePickerContainer>
          <Title style={{ fontSize: 30, marginBottom: theme.BASELINE * 4 }}>Congratulations!</Title>
          <Title>When was the first day of your last period?</Title>
          <PickerWrapper>
            <DatePicker
              minimumDate={this.minDate}
              maximumDate={this.maxDate}
              mode={'date'}
              date={this.state.date}
              onDateChange={date => this.setState({ date })}
            />
          </PickerWrapper>
          <SquareButton
            textStyle={{ color: 'black' }}
            style={{ backgroundColor: 'white', width: 64 }}
            title="OK"
            onPress={this.selectDate}
          />
        </DueDatePickerContainer>
      </Container>
    )
  }
}

const mapStateToProps = ({ user }: ApplicationState) => ({ user })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDueDate: (dueDate: Date) => dispatch(setDueDate(dueDate)),
  setHasSeenOnboarding: () => dispatch(setHasSeenOnboarding(true))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DueDatePicker)
