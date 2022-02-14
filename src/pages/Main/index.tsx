import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useIsAuthenticated } from 'src/hooks'
import { MainContentRoutes } from 'src/routes'
import { requestCheckAuth } from 'src/store/ducks/auth'

import useResponsiveLogic from './useResponsiveLogic'
import MainDrawer from './MainDrawer'
import MainNavbar from './MainNavbar'
import { Container, Content, RoutesContainer } from './styles'

const Main: React.FC = () => {
  const { handleToggleDrawer, isResponsiveMode, isShowingDrawer } =
    useResponsiveLogic()

  const isAuthenticated = useIsAuthenticated()
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    dispatch(requestCheckAuth())
  }, [dispatch])

  return (
    <Container>
      {isAuthenticated && (
        <MainDrawer
          handleToggleDrawer={handleToggleDrawer}
          isResponsiveMode={isResponsiveMode}
          isShowingDrawer={isShowingDrawer}
        />
      )}

      <Content>
        <MainNavbar handleToggleDrawer={handleToggleDrawer} />
        <RoutesContainer>
          <MainContentRoutes />
        </RoutesContainer>
      </Content>
    </Container>
  )
}

export default Main
