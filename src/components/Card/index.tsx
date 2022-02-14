import React from 'react'

import {
  CardContent,
  CardHeader,
  CardBodyTittle,
  CardBody,
  Date,
  TextBody,
  DivContent,
  DivDate,
} from './styles'

export interface CardProps {
  className?: string
  style?: React.CSSProperties
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  Image?: string
  title: string
  data: React.ReactText
  footerComponent?: React.ReactNode
}

export const Card: React.FC<CardProps> = (props) => {
  const { className, style, onClick, Image, title, data, footerComponent } =
    props

  return (
    <CardContent className={className} style={style} onClick={onClick}>
      <CardHeader>
        <img src={Image} alt="image" />
      </CardHeader>

      <CardBody>
        <DivContent>
          <CardBodyTittle>{title}</CardBodyTittle>
          <TextBody>{data}</TextBody>
        </DivContent>
        <DivDate>
          <Date>Ha 5 horas</Date>
        </DivDate>
      </CardBody>

      {footerComponent}
    </CardContent>
  )
}
