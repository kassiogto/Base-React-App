import React from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiChevronLeft } from 'react-icons/fi'

import { useSetBrowserTabTitle } from 'src/hooks'

import { Container, Content, Title, Subtitle, BackButton } from './styles'

const PageNotFound: React.FC = () => {
  useSetBrowserTabTitle('pageNotFound')

  const { t } = useTranslation('PageNotFound')
  const history = useHistory()

  const handleGoBack = () => {
    history.push('/')
  }

  return (
    <Container>
      <Content>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>

        <BackButton onClick={handleGoBack}>
          <FiChevronLeft />
          <span>{t('backButton')}</span>
        </BackButton>
      </Content>
    </Container>
  )
}

export default PageNotFound
