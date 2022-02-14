import React from 'react'

import { Container, IconContainer, Message } from './styles'

export interface EmptyMessageProps {
  className?: string
  style?: React.CSSProperties
  iconComponent?: React.ReactNode
  message?: string
}

export const EmptyMessage: React.FC<EmptyMessageProps> = (props) => {
  const { className, style, children, iconComponent, message } = props

  return (
    <Container style={style} className={className}>
      <IconContainer>{iconComponent}</IconContainer>
      <Message>{message}</Message>
      {children}
    </Container>
  )
}
