import React from 'react'

import { useTypedSelector } from 'src/hooks'

import {
  Container,
  UserAvatar,
  UserData,
  UserName,
  CompanyName,
} from './styles'

export interface MainDrawerHeaderProps {
  style?: React.CSSProperties
  className?: string
}

const MainDrawerHeader: React.FC<MainDrawerHeaderProps> = (props) => {
  const { className, style } = props

  const authData = useTypedSelector(({ Auth }) => Auth.authData)

  return (
    <Container style={style} className={className}>
      <UserAvatar alt={authData?.usuario_login} />

      <UserData>
        <UserName title={authData?.usuario_login}>
          {authData?.usuario_login}
        </UserName>

        <CompanyName title={authData?.usuario_emaillogin}>
          {authData?.usuario_emaillogin}
        </CompanyName>
      </UserData>
    </Container>
  )
}

export default MainDrawerHeader
