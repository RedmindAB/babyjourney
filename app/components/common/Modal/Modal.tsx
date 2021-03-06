import React, { Component } from 'react'
import { ModalContainer, ModalBackground, Xbutton, XbuttonContainer } from './styled'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setHasSeenCongratsModal } from '../../../store/user/actions'

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type Props = PropsFromDispatch

class Modal extends Component<Props> {
  closeModal = () => {
    this.props.closeModal()
  }

  render() {
    return (
      <ModalBackground>
        <ModalContainer>
          {this.props.children}
          <XbuttonContainer>
            <TouchableOpacity onPress={this.closeModal}>
              <Xbutton style={{ transform: [{ rotate: '45deg' }] }}>+</Xbutton>
            </TouchableOpacity>
          </XbuttonContainer>
        </ModalContainer>
      </ModalBackground>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeModal: () => dispatch(setHasSeenCongratsModal(true))
})

export default connect(
  null,
  mapDispatchToProps
)(Modal)
