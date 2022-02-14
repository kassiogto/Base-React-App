import React from 'react'
import { LinkProps } from 'react-router-dom'

import { Container, Text } from './styles'

export interface DrawerItemProps {
  style?: React.CSSProperties
  className?: string
  text: string
  to: LinkProps['to']
  iconComponent?: React.ReactNode
  badgeComponent?: React.ReactNode
  selected?: boolean
}

const DrawerItem: React.FC<DrawerItemProps> = (props) => {
  const {
    style,
    className,
    text,
    to,
    selected = false,
    badgeComponent,
    iconComponent,
  } = props

  return (
    <Container to={to} style={style} className={className} selected={selected}>
      {iconComponent}

      <Text hasIcon={!!iconComponent} hasBadge={!!badgeComponent}>
        {text}
      </Text>

      {badgeComponent}
    </Container>
  )
}

export default DrawerItem
