import React, { Component } from 'react'
import Container from '../../components/common/Container'
import theme from '../../theme'
import { ToolsContainer } from './styled'
import ToolButton from '../../components/common/ToolButton'
import { Tool } from '../../components/common/ToolButton/ToolButton'

const margin = theme.BASELINE * 1.5

class Tools extends Component {
  tools: Tool[] = [
    { label: 'forum', icon: 'Forum' },
    { label: 'chatWithExpert', icon: 'Chat' },
    { label: 'blogConnection', icon: 'Blog' },
    { label: 'instagram', icon: 'Instagram' },
    { label: 'weightCurve', icon: 'WeightCurve' },
    { label: 'calender', icon: 'Calender' },
    { label: 'contractionTimer', icon: 'ContractionTimer' },
    { label: 'checklist', icon: 'Checklist' },
    { label: 'weekList', icon: 'WeekList' },
    { label: 'meetDoctor', icon: 'MeetDoctor' },
    { label: 'prenatalCare', icon: 'MVC' }
  ]

  renderTools() {
    return this.tools.map(tool => (
      <ToolButton
        key={tool.label}
        onPress={() => undefined}
        style={{ margin: margin / 2 }}
        tool={tool}
      />
    ))
  }

  render() {
    return (
      <Container withoutMargin>
        <ToolsContainer>{this.renderTools()}</ToolsContainer>
      </Container>
    )
  }
}

export default Tools
