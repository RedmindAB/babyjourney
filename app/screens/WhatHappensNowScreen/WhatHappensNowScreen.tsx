import React, { Component } from 'react'
import Container from '../../components/common/Container'
import SwitchList from '../../components/common/SwitchList'
import { NavigationScreenProps } from 'react-navigation'
import { InfoText, IconCircleContainer } from '../../components/common/styled'
import theme from '../../theme'
import { Icons } from '../../assets'

type Props = NavigationScreenProps

type State = {
  options: string[]
  selectedIndex: number
}

class WhatHappensNowScreen extends Component<Props, State> {
  state: State = {
    options: ['Baby', 'Mother', 'Partner'],
    selectedIndex: 0
  }

  icons = [Icons.BabyNow, Icons.MotherNow, Icons.PartnerNow]

  selectOption = index => {
    this.setState({ selectedIndex: index })
  }

  render() {
    const Icon = this.icons[this.state.selectedIndex]
    return (
      <Container weekHeader withHeader>
        <SwitchList
          onPress={this.selectOption}
          selectedIndex={this.state.selectedIndex}
          options={this.state.options}
        />

        <IconCircleContainer
          style={{
            alignSelf: 'center',
            marginVertical: theme.BASELINE * 6,
            shadowOpacity: 0.47,
            shadowColor: '#ff9d9e',
            height: 120,
            width: 120,
            borderRadius: 60
          }}
        >
          <Icon width={56} height={56} />
        </IconCircleContainer>

        <InfoText>
          In week 13, your baby's skeleton is starting to develop with the clavicle (collar bone)
          and femur (thigh bone) developing first. Along with the skeleton, their organs continue to
          grow with their stomach and bowel taking shape as well as their vocal chords (which will
          get a lot of use in a few months' time!) Your baby’s lungs are also developing and in week
          13 they’ll start to take their first few ‘breaths’. They’ll be getting oxygen in their
          blood from the umbilical cord as they’re surrounded by amniotic fluid, so instead it’ll be
          like they’re breathing under water.
        </InfoText>
        <InfoText style={{ marginTop: theme.BASELINE * 3 }}>
          In week 13, your baby's skeleton is starting to develop with the clavicle (collar bone)
          and femur (thigh bone) developing first. Along with the skeleton, their organs continue to
          grow with their stomach and bowel taking shape as well as their vocal chords (which will
          get a lot of use in a few months' time!) Your baby’s lungs are also developing and in week
          13 they’ll start to take their first few ‘breaths’. They’ll be getting oxygen in their
          blood from the umbilical cord as they’re surrounded by amniotic fluid, so instead it’ll be
          like they’re breathing under water.
        </InfoText>
      </Container>
    )
  }
}

export default WhatHappensNowScreen
