import React from 'react'

import LogoutFromAccount from '../LogoutFromAccount'
import MainDrawerHeader from '../MainDrawerHeader'
import MainDrawerItems from '../MainDrawerItems'

import { MainDrawerMenu, DrawerBackdrop } from './styles'

interface MainDrawerProps {
  handleToggleDrawer: () => void
  isResponsiveMode: boolean
  isShowingDrawer: boolean
}

const MainDrawer: React.FC<MainDrawerProps> = ({
  handleToggleDrawer,
  isResponsiveMode,
  isShowingDrawer,
}) => {
  return (
    <>
      {isResponsiveMode && isShowingDrawer && (
        <DrawerBackdrop onClick={handleToggleDrawer} />
      )}

      <MainDrawerMenu
        headerComponent={<MainDrawerHeader />}
        isShowingDrawer={isShowingDrawer}
        isResponsiveMode={isResponsiveMode}
      >
        <MainDrawerItems />
        <LogoutFromAccount />
      </MainDrawerMenu>
    </>
  )
}

export default MainDrawer
