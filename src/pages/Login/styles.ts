import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Input, AccentButton } from 'src/components'
import { LoginBackground } from 'src/assets'

export const Container = styled.div`
  min-height: 100%;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${LoginBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.4rem 0;
`

export const LoginForm = styled.form`
  background: ${(props) => props.theme.background};
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;

  max-width: 50rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin: 0 2.4rem 1.6rem 2.4rem;
  }
`

export const Header = styled.div`
  padding: 1.6rem 2.4rem;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.border};

  @media only screen and (max-width: 380px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Logo = styled.img`
  height: 10rem;
  width: 10rem;

  border-radius: 100%;
  user-select: none;

  @media only screen and (max-width: 480px) {
    height: 7rem;
    width: 7rem;
  }

  @media only screen and (max-width: 380px) {
    margin-bottom: 0.8rem;
  }
`

export const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 60%;

  @media only screen and (max-width: 380px) {
    max-width: unset;
  }
`

export const Title = styled.div`
  font-weight: 800;
  font-size: 2.6rem;
`

export const Subtitle = styled.div`
  color: ${(props) => props.theme.secondaryText};
`

export const Body = styled.div`
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  flex: 1;
`

export const LoginInput = styled(Input)`
  margin-bottom: 1.6rem;
`

export const ForgotPassword = styled(Link)`
  outline: none;

  align-self: flex-end;

  color: ${(props) => props.theme.secondaryText};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.primaryText};
  }
`

export const Footer = styled.div`
  padding: 0.8rem 2.4rem 2.4rem 2.4rem;
`

export const LoginButton = styled(AccentButton)``
