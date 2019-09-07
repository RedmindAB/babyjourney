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

type Props = NavigationScreenProps

class Onboarding extends Component<Props> {
  state = {
    date: new Date()
  }

  selectDate = () => {
    this.props.navigation.navigate(screens.HOME)
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#ffe9e9' }}>
        <OnboardingContainer>
          <Title style={{ fontSize: 30, marginBottom: theme.BASELINE * 4 }}>Congratulations!</Title>
          <Title>When are you due?</Title>
          <View
            style={{ backgroundColor: '#ffb9ba', borderRadius: 14, transform: [{ scale: 0.7 }] }}
          >
            <DatePicker
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

export default Onboarding
