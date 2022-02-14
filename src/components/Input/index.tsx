import React from 'react'

import { Container, Content, InputContainer } from './styles'

export interface InputProps {
  style?: React.CSSProperties
  className?: string
  labelComponent?: React.ReactNode
  inputComponent?: React.ReactNode
  errorComponent?: React.ReactNode
  iconComponent?: React.ReactNode
  actionComponent?: React.ReactNode
  showAction?: boolean
  showError?: boolean
  showLabel?: boolean
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    style,
    className,
    labelComponent,
    inputComponent,
    errorComponent,
    iconComponent,
    actionComponent,
    showAction = false,
    showError = false,
    showLabel = true,
  } = props

  return (
    <Container className={className} style={style}>
      {iconComponent}

      <Content
        hasIcon={!!iconComponent}
        hasAction={showAction && !!actionComponent}
      >
        {showLabel && labelComponent}

        <InputContainer
          hasLabel={showLabel && !!labelComponent}
          hasError={showError && !!errorComponent}
        >
          {inputComponent}
        </InputContainer>

        {showError && errorComponent}
      </Content>

      {showAction && actionComponent}
    </Container>
  )
}
