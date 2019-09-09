import React, { Component, Fragment } from 'react'

import AppContainer from './navigation'
import { Text } from 'react-native'
import { ApplicationState } from './store'
import { connect } from 'react-redux'
import Modal from './components/common/Modal'
import WeekCongrats from './components/common/WeekCongrats'

type PropsFromState = ReturnType<typeof mapStateToProps>

type Props = PropsFromState

class AppWrapper extends Component<Props> {
  render() {
    const { hasSeenCongratsModal, hasSeenOnboarding } = this.props.user
    console.log('riunning')
    return (
      <Fragment>
        <AppContainer />
        {hasSeenOnboarding && !hasSeenCongratsModal && (
          <Modal>
            <WeekCongrats />
          </Modal>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ user }: ApplicationState) => ({ user })

export default connect(mapStateToProps)(AppWrapper)
