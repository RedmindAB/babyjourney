import React, { Component } from 'react'
import Container from '../../components/common/Container'
import theme from '../../theme'
import { ToolsContainer } from './styled'
import ToolButton from '../../components/common/ToolButton'
import { Tool } from '../../components/common/ToolButton/ToolButton'

const margin = theme.BASELINE * 1.5

class Tools extends Component {
  tools: Tool[] = [
    { label: 'Forum', icon: 'Forum' },
    { label: 'Chatt med expert', icon: 'Chat' },
    { label: 'BloggKoppling', icon: 'Blog' },
    { label: 'Instagram', icon: 'Instagram' },
    { label: 'Viktkurva', icon: 'WeightCurve' },
    { label: 'Kalender', icon: 'Calender' },
    { label: 'Värktimer', icon: 'ContractionTimer' },
    { label: 'Checklista', icon: 'Checklist' },
    { label: 'Veckolista', icon: 'WeekList' },
    { label: 'Träffa läkare', icon: 'MeetDoctor' },
    { label: 'MVC', icon: 'MVC' }
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
      <Container style={{ padding: margin / 2 }} withoutMargin>
        <ToolsContainer>{this.renderTools()}</ToolsContainer>
      </Container>
    )
  }
}

export default Tools
