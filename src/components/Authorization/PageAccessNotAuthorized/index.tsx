import React from 'react'
import { FiEyeOff } from 'react-icons/fi'

import { Container, Content, IconContainer, Title, Message } from './styles'

export interface PageAccessNotAuthorizedProps {
  className?: string
  style?: React.CSSProperties
  message: string
  title: string
}

export const PageAccessNotAuthorized: React.FC<
  PageAccessNotAuthorizedProps
> = ({ className, style, message, title }) => {
  return (
    <Container className={className} style={style}>
      <Content>
        <IconContainer>
          <FiEyeOff />
        </IconContainer>

        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
    </Container>
  )
}
