import React from 'react'
import { FiX } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

import { Portal } from 'src/components/Portal'
import { RoundIconButton } from 'src/components/IconButtons'

import {
  Backdrop,
  Dialog,
  Header,
  Body,
  Footer,
  ConfirmButton,
  CancelButton,
} from './styles'

export interface ConfirmModalProps {
  className?: string
  style?: React.CSSProperties
  title: string
  subtitle?: string
  message?: string
  cancelButtonText?: string
  confirmButtonText?: string
  confirmButtonType?: 'danger' | 'success'
  isShowing: boolean
  closeWhenConfirm?: boolean
  iconComponent?: React.ReactNode
  handleHideModal?: () => void
  onConfirm?: () => void
  onCancel?: () => void
}

export const ConfirmModal: React.FC<ConfirmModalProps> = (props) => {
  const {
    className,
    style,
    title,
    subtitle,
    isShowing,
    handleHideModal,
    message,
    onCancel,
    onConfirm,
    closeWhenConfirm = true,
    iconComponent,
    confirmButtonType = 'success',
    cancelButtonText,
    confirmButtonText,
  } = props

  const { t } = useTranslation('Glossary')

  const handleClose = () => {
    if (onCancel) onCancel()
    if (handleHideModal) handleHideModal()
  }

  const handleConfirm = () => {
    if (onConfirm) onConfirm()
    if (handleHideModal && closeWhenConfirm) handleHideModal()
  }

  const handleDialogClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return isShowing ? (
    <Portal id="confirmation-modal">
      <Backdrop className={className} style={style} onClick={handleClose}>
        <Dialog onClick={handleDialogClick}>
          <Header
            title={title}
            subtitle={subtitle}
            iconComponent={iconComponent}
            closeButtonComponent={
              <RoundIconButton onClick={handleClose}>
                <FiX />
              </RoundIconButton>
            }
          />

          <Body>{message}</Body>

          <Footer>
            <CancelButton onClick={handleClose}>
              <span>{cancelButtonText || t('Glossary:cancel')}</span>
            </CancelButton>

            <ConfirmButton
              onClick={handleConfirm}
              buttonType={confirmButtonType}
            >
              <span>{confirmButtonText || t('Glossary:ok')}</span>
            </ConfirmButton>
          </Footer>
        </Dialog>
      </Backdrop>
    </Portal>
  ) : null
}
