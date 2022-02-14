import React from 'react'

import { Container, Content, Title, Subtitle } from './styles'

export interface ModalHeaderProps {
  className?: string
  style?: React.CSSProperties
  iconComponent?: React.ReactNode
  closeButtonComponent?: React.ReactNode
  title: string
  subtitle?: string
}

const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
  const {
    className,
    style,
    iconComponent,
    closeButtonComponent,
    title,
    subtitle,
  } = props

  return (
    <Container style={style} className={className}>
      {iconComponent}

      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>

      {closeButtonComponent}
    </Container>
  )
}

export default ModalHeader
