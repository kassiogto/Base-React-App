import React, { useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FiArrowDown, FiMenu } from 'react-icons/fi'
import { useDispatch } from 'react-redux'

import { Bitcoin } from 'src/assets'
import { useIsAuthenticated } from 'src/hooks'
import { requestCheckAuth } from 'src/store/ducks/auth'

import {
  NavbarContent,
  Navbar,
  DrawerToggler,
  NavbarTitle,
  Logo,
  Container,
  LoginContent,
  ContentMenuItem,
  MenuDropdown,
} from './styles'

interface MainNavbarProps {
  handleToggleDrawer: () => void
}

const MainNavbar: React.FC<MainNavbarProps> = ({ handleToggleDrawer }) => {
  const { t } = useTranslation('Common')

  const isAuthenticated = useIsAuthenticated()
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(requestCheckAuth())
  }, [dispatch])

  return (
    <NavbarContent>
      <Navbar>
        <Container>
          {isAuthenticated && (
            <DrawerToggler onClick={handleToggleDrawer}>
              <FiMenu />
            </DrawerToggler>
          )}

          <Logo src={Bitcoin} alt={t('appName')} />
          <NavbarTitle>{t('appName')}</NavbarTitle>
        </Container>

        <ContentMenuItem>
          <ul>
            <li>BTC</li>
            <li>SOL</li>
            <li>DOGE</li>
            <li>BCOIN</li>
            <li>BBL</li>
          </ul>
        </ContentMenuItem>
        <LoginContent>
          <p>Alterar Cripto | B3</p>
          <p>Login</p>
        </LoginContent>
      </Navbar>
      <MenuDropdown>
        <p>
          Notícias <FiArrowDown />
        </p>
        <p>
          Destaques <FiArrowDown />
        </p>
        <p>
          Analise Preço <FiArrowDown />
        </p>
        <p>
          Ferramentas <FiArrowDown />
        </p>
        <p>
          Pessoas <FiArrowDown />
        </p>
        <p>
          Criptopedias <FiArrowDown />
        </p>
      </MenuDropdown>
    </NavbarContent>
  )
}

export default MainNavbar
