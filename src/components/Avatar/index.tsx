import React from 'react'

import { Image, NameInitials } from './styles'

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  onClick?: (
    event: React.MouseEvent<HTMLImageElement | HTMLDivElement, MouseEvent>,
  ) => void
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return props.src ? (
    <Image {...props} />
  ) : (
    <NameInitials
      text={props.alt || ''}
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  )
}
