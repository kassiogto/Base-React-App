import React from 'react'

import { Container, Input, CheckMark } from './styles'

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  style?: React.CSSProperties
  checkMarkClassName?: string
  checkMarkStyle?: React.CSSProperties
  type?: 'checkbox' | 'radio'
  checkMarkIcon: React.ReactNode
  isCheckMarkRounded?: boolean
}

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const {
    className,
    style,
    checkMarkIcon,
    children,
    checkMarkClassName,
    checkMarkStyle,
    type = 'checkbox',
    isCheckMarkRounded,
    ...inputProps
  } = props

  return (
    <Container htmlFor={inputProps.id} className={className} style={style}>
      <Input type={type} {...inputProps} />

      <CheckMark
        style={checkMarkStyle}
        className={checkMarkClassName}
        checked={inputProps.checked}
        disabled={inputProps.disabled}
        isCheckMarkRounded={isCheckMarkRounded}
      >
        {!!inputProps.checked && checkMarkIcon}
      </CheckMark>

      {children}
    </Container>
  )
}
