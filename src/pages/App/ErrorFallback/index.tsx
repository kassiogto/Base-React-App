import React from 'react'
import { FallbackProps } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'
import { FiFrown, FiRefreshCcw } from 'react-icons/fi'

import {
  Container,
  IconContainer,
  Title,
  Message,
  TryAgainButton,
} from './styles'

const ErrorFallback: React.FC<FallbackProps> = (props) => {
  const { error, resetErrorBoundary } = props

  const { t } = useTranslation(['Common', 'Error'])

  return (
    <Container>
      <IconContainer>
        <FiFrown />
      </IconContainer>

      <Title>{t('Error:default')}</Title>
      <Message>{error.message}</Message>

      <TryAgainButton onClick={resetErrorBoundary}>
        <span>{t('tryAgain')}</span>
        <FiRefreshCcw />
      </TryAgainButton>
    </Container>
  )
}

export default ErrorFallback
