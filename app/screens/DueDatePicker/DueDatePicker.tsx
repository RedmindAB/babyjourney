import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setHasSeenOnboarding, setDueDate } from '../../store/user/actions'
import { Dispatch } from 'redux'
import { ApplicationState } from '../../store'
import { Headline } from '../../components/common/styled'
import Container from '../../components/common/Container'
import { screens } from '../../navigation/navigationConstants'
import { NavigationScreenProps } from 'react-navigation'
import { DueDatePickerContainer, PickerWrapper } from './styled'
import theme from '../../theme'
import DatePicker from 'react-native-date-picker'
import SquareButton from '../../components/common/SquareButton'
import LinearGradient from 'react-native-linear-gradient'
import { View } from 'react-native'
import GradientSwitch from '../../components/common/GradientSwitch'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type Props = NavigationScreenProps & PropsFromDispatch & PropsFromState

type State = {
  date: Date
  setting: string
  minDate: Date
  maxDate: Date
}

class DueDatePicker extends Component<Props, State> {
  dateOptions = [
    { value: 'dueDate', label: 'Due date' },
    { value: 'period', label: 'First day of last period' }
  ]

  state: State = {
    minDate: new Date(new Date().setDate(new Date().getDate() - 7 * 40)),
    maxDate: new Date(),
    date: new Date(),
    setting: 'dueDate'
  }

  componentDidMount() {
    this.setMinMaxDate()
  }

  setMinMaxDate = () => {
    let minDate: Date
    let maxDate: Date
    if (this.state.setting === 'period') {
      minDate = new Date(new Date().setDate(new Date().getDate() - 7 * 40))
      maxDate = new Date()
    } else {
      minDate = new Date()
      maxDate = new Date(new Date().setDate(new Date().getDate() + 7 * 40))
    }
    this.setState({ minDate, maxDate })
  }

  selectDate = () => {
    if (this.state.setting === 'period') {
      const dueDate = new Date(this.state.date)
      dueDate.setDate(this.state.date.getDate() + 7 * 40)
      this.props.setDueDate(dueDate)
    } else {
      this.props.setDueDate(this.state.date)
    }
    this.props.setHasSeenOnboarding()
    this.props.navigation.navigate(screens.HOME)
  }

  setDateSetting = (setting: string) => {
    this.setState({ setting }, this.setMinMaxDate)
  }

  render() {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#ffe9e9', '#fff6cc']}
      >
        <Container withoutMargin style={{ backgroundColor: 'transparent' }}>
          <DueDatePickerContainer>
            <Headline style={{ maxWidth: '70%' }}>Let's figure out your due date</Headline>
            <View style={{ width: '100%' }}>
              <GradientSwitch
                style={{ marginBottom: theme.BASELINE * 2 }}
                onPress={this.setDateSetting}
                selectedValue={this.state.setting}
                options={this.dateOptions}
              />
              <PickerWrapper>
                <DatePicker
                  minimumDate={this.state.minDate}
                  maximumDate={this.state.maxDate}
                  mode={'date'}
                  date={this.state.date}
                  onDateChange={date => this.setState({ date })}
                />
              </PickerWrapper>
            </View>
            <SquareButton bigButton title="SUBMIT" onPress={this.selectDate} />
          </DueDatePickerContainer>
        </Container>
      </LinearGradient>
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
