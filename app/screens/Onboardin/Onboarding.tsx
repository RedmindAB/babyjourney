import React, { Component } from 'react'
import Container from '../../components/common/Container'
import { View } from 'react-native'
import { OnboardingContainer } from './styled'
import DatePicker from 'react-native-date-picker'
import { Title } from '../../components/common/styled'
import theme from '../../theme'
import SquareButton from '../../components/common/SquareButton'
import { NavigationScreenProps } from 'react-navigation'
import { screens } from '../../navigation/navigationConstants'
import { ApplicationState } from '../../store'
import { connect } from 'react-redux'
import { setDueDate } from '../../store/user/actions'
import { Dispatch } from 'redux'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type Props = NavigationScreenProps & PropsFromDispatch & PropsFromState

const oneWeek = 6.04e8

class Onboarding extends Component<Props> {
  minDate = new Date(new Date().setDate(new Date().getDate() - 7 * 40))
  maxDate = new Date()

  state = {
    date: new Date()
  }

  selectDate = () => {
    const dueDate = new Date(this.state.date)
    dueDate.setDate(this.state.date.getDate() + 7 * 40)
    this.props.setDueDate(dueDate)
    this.props.navigation.navigate(screens.HOME)
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#ffe9e9' }}>
        <OnboardingContainer>
          <Title style={{ fontSize: 30, marginBottom: theme.BASELINE * 4 }}>Congratulations!</Title>
          <Title>When was the first day of your last period?</Title>
          <View
            style={{ backgroundColor: '#ffb9ba', borderRadius: 14, transform: [{ scale: 0.9 }] }}
          >
            <DatePicker
              minimumDate={this.minDate}
              maximumDate={this.maxDate}
              mode={'date'}
              date={this.state.date}
              onDateChange={date => this.setState({ date })}
            />
          </View>
          <SquareButton
            textStyle={{ color: 'black' }}
            style={{ backgroundColor: 'white', width: 64 }}
            title="OK"
            onPress={this.selectDate}
          />
        </OnboardingContainer>
      </Container>
    )
  }
}

const mapStateToProps = ({ user }: ApplicationState) => ({ user })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDueDate: (dueDate: Date) => dispatch(setDueDate(dueDate))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Onboarding)
