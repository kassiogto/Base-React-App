import React from 'react'

import { Container, Text } from './styles'

export interface ToastProps {
  className?: string
  style?: React.CSSProperties
  iconComponent?: React.ReactNode
  text: string
}

export const Toast: React.FC<ToastProps> = (props) => {
  const { className, style, iconComponent, text } = props

  return (
    <Container style={style} className={className}>
      {iconComponent}
      <Text hasIcon={!!iconComponent}>{text}</Text>
    </Container>
  )
}
