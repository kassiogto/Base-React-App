import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'

import { LogoRound } from 'src/assets'
import { useIsLoading, useSetBrowserTabTitle } from 'src/hooks'
import { SnowInput, DefaultLabel, WhiteSpinner } from 'src/components'
import { AUTH_TYPES, requestAuthenticate } from 'src/store/ducks/auth'

import {
  Container,
  LoginForm,
  Header,
  Body,
  Footer,
  Logo,
  Title,
  Subtitle,
  HeaderTexts,
  LoginButton,
  LoginInput,
  ForgotPassword,
} from './styles'

const Login: React.FC = () => {
  useSetBrowserTabTitle('login')

  const { t } = useTranslation(['Login', 'Common'])
  const dispatch = useDispatch()
  const history = useHistory()

  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const isLoading = useIsLoading(AUTH_TYPES.REQUEST_AUTHENTICATE)

  const getValues = () => {
    const email = emailRef.current?.value || ''
    const password = passwordRef.current?.value || ''

    return {
      email,
      password,
    }
  }

  const handleValidate = (): boolean => {
    const { email, password } = getValues()

    if (!email.trim()) {
      emailRef.current?.focus()
      return false
    } else if (!password.trim()) {
      passwordRef.current?.focus()
      return false
    }

    return true
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (handleValidate()) {
      const { email, password } = getValues()

      dispatch(
        requestAuthenticate(email, password, () => {
          history.push('/')
        }),
      )
    }
  }

  return (
    <Container>
      <LoginForm onSubmit={handleLogin} noValidate>
        <Header>
          <Logo src={LogoRound} alt={t('logoAlt')} draggable={false} />

          <HeaderTexts>
            <Title>{t('Common:appName')}</Title>
            <Subtitle>{t('Common:slogan')}</Subtitle>
          </HeaderTexts>
        </Header>

        <Body>
          <LoginInput
            labelComponent={
              <DefaultLabel htmlFor="email">
                <FiMail />
                <span>{t('emailLabel')}</span>
              </DefaultLabel>
            }
            inputComponent={
              <SnowInput
                id="email"
                ref={emailRef}
                disabled={isLoading}
                type="email"
                autoCapitalize="off"
                placeholder={t('emailPh')}
              />
            }
          />

          <LoginInput
            labelComponent={
              <DefaultLabel htmlFor="password">
                <FiLock />
                <span>{t('passwordLabel')}</span>
              </DefaultLabel>
            }
            inputComponent={
              <SnowInput
                id="password"
                ref={passwordRef}
                disabled={isLoading}
                type="password"
                autoCorrect="off"
                autoComplete="off"
                placeholder={t('passwordPh')}
              />
            }
          />

          <ForgotPassword to="/forgot-password">
            {t('forgotPassword')}
          </ForgotPassword>
        </Body>

        <Footer>
          <LoginButton type="submit" disabled={isLoading}>
            <span>{t('loginButton')}</span>
            {isLoading ? <WhiteSpinner /> : <FiLogIn />}
          </LoginButton>
        </Footer>
      </LoginForm>
    </Container>
  )
}

export default Login
