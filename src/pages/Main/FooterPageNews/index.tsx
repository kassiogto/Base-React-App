import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi'

import { Bitcoin } from 'src/assets'

import {
  Container,
  Logo,
  LogoContent,
  IconsContent,
  IconContainer,
  ContentHeader,
  Content,
  ContentSlogan,
  DivInitial,
  Div,
} from './styles'

const FooterPageNews: React.FC = () => {
  const { t } = useTranslation('Common')
  return (
    <Container>
      <Div>
        <DivInitial>
          <ContentHeader>
            <LogoContent>
              <Logo src={Bitcoin} alt={t('appName')} />
              <h3>Newspaper Holder</h3>
            </LogoContent>
            <ContentSlogan>
              <p>
                Portal do Bitcoin é líder em notícias sobre bitcoin e mercado
                brasileiro de criptomoedas.
              </p>
            </ContentSlogan>
          </ContentHeader>
          <IconsContent>
            <IconContainer>
              <FiInstagram />
            </IconContainer>
            <IconContainer>
              <FiLinkedin />
            </IconContainer>
            <IconContainer>
              <FiFacebook />
            </IconContainer>
            <IconContainer>
              <FiTwitter />
            </IconContainer>
          </IconsContent>
        </DivInitial>
        <Content>
          <h3>Noticias</h3>
          <ul>
            <li>Últimas notícias</li>
            <li>Bitcoin</li>
            <li>Criptomoedas</li>
            <li>Blockchain</li>
            <li>Brasil</li>
          </ul>
        </Content>
        <Content>
          <h3>Ferramentas</h3>
          <ul>
            <li>Assuntos</li>
            <li>Cotação do Bitcoin</li>
            <li>Cotação das Criptomoedas</li>
            <li>E-book Declaração IR Criptoativos</li>
            <li>Sitemap</li>
          </ul>
        </Content>
        <Content>
          <h3>Informações</h3>
          <ul>
            <li>Quem somos</li>
            <li>Contato</li>
            <li>Anuncie</li>
            <li>Trabalhe Conosco</li>
            <li>Denúncia</li>
          </ul>
        </Content>
      </Div>
    </Container>
  )
}

export default FooterPageNews
