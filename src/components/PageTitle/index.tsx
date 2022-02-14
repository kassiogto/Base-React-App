import React from 'react'

import { Container, Content, Title, Subtitle, IconContainer } from './styles'

export interface PageTitleProps {
  className?: string
  style?: React.CSSProperties
  title: string
  subtitle?: string
  iconComponent?: React.ReactNode
}

export const PageTitle: React.FC<PageTitleProps> = (props) => {
  const { className, style, title, subtitle, iconComponent, children } = props

  return (
    <Container className={className} style={style}>
      {!!iconComponent && <IconContainer>{iconComponent}</IconContainer>}

      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children}
      </Content>
    </Container>
  )
}
