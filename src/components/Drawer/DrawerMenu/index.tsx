import React from 'react'

import { Container } from './styles'

export interface DrawerMenuProps {
  style?: React.CSSProperties
  className?: string
  headerComponent?: React.ReactNode
  footerComponent?: React.ReactNode
}

const DrawerMenu: React.FC<DrawerMenuProps> = (props) => {
  const { style, className, children, footerComponent, headerComponent } = props

  return (
    <Container style={style} className={className}>
      {headerComponent}
      {children}
      {footerComponent}
    </Container>
  )
}

export default DrawerMenu
