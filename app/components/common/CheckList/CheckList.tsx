import React, { Component } from 'react'
import {
  CheckListContainer,
  CheckListItemContainer,
  CheckListItemText,
  CheckListCheckMarkContainer,
  CheckListItemInnerContainer
} from './styled'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icons } from '../../../assets'

export type CheckListItem = {
  title: string
  done: boolean
}

type OwnProps = {
  items: CheckListItem[]
  onPress: (index: number) => void
}

type Props = OwnProps

class CheckList extends Component<Props> {
  renderItems = () => {
    const { items } = this.props
    return items.map((item, index) => {
      const onPress = () => this.props.onPress(index)
      return (
        <CheckListItemContainer key={item.title} noBorder={index === items.length - 1}>
          <TouchableOpacity onPress={onPress}>
            <CheckListItemInnerContainer>
              <CheckListItemText>{item.title}</CheckListItemText>
              <CheckListCheckMarkContainer checked={item.done}>
                {item.done && <Icons.Tick />}
              </CheckListCheckMarkContainer>
            </CheckListItemInnerContainer>
          </TouchableOpacity>
        </CheckListItemContainer>
      )
    })
  }

  render() {
    return <CheckListContainer>{this.renderItems()}</CheckListContainer>
  }
}

export default CheckList
