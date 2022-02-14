import React from 'react'
import { FiX } from 'react-icons/fi'

import { Portal } from 'src/components/Portal'
import { RoundIconButton } from 'src/components/IconButtons'

import { Backdrop, Dialog, Header, Body } from './styles'

export interface SimpleModalProps {
  className?: string
  style?: React.CSSProperties
  title: string
  subtitle?: string
  isShowing: boolean
  handleHideModal?: (() => void) | ((isShowing: boolean) => void)
  iconComponent?: React.ReactNode
}

export const SimpleModal: React.FC<SimpleModalProps> = (props) => {
  const {
    className,
    style,
    title,
    subtitle,
    isShowing,
    handleHideModal,
    children,
    iconComponent,
  } = props

  const handleHide = () => {
    if (handleHideModal) handleHideModal(false)
  }

  const handleDialogClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return isShowing ? (
    <Portal id="simple-modal">
      <Backdrop className={className} style={style} onClick={handleHide}>
        <Dialog onClick={handleDialogClick}>
          <Header
            title={title}
            subtitle={subtitle}
            iconComponent={iconComponent}
            closeButtonComponent={
              <RoundIconButton onClick={handleHide}>
                <FiX />
              </RoundIconButton>
            }
          />

          {!!children && <Body>{children}</Body>}
        </Dialog>
      </Backdrop>
    </Portal>
  ) : null
}
