import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiCheckCircle, FiCircle, FiX, FiXOctagon } from 'react-icons/fi'
import { useDispatch } from 'react-redux'

import { Portal } from 'src/components'
import { useTypedSelector } from 'src/hooks'
import { hideError } from 'src/store/ducks/error'

import {
  Backdrop,
  Dialog,
  Header,
  Body,
  ErrorItem,
  Footer,
  CloseButton,
  ConfirmButton,
} from './styles'

const GlobalErrorModal: React.FC = () => {
  const { t } = useTranslation(['Error', 'Glossary'])
  const dispatch = useDispatch()

  const { isShowing, messages, title } = useTypedSelector(({ Error }) => Error)

  const handleCloseModal = () => {
    dispatch(hideError())
  }

  const handleClickDialog = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return isShowing && !!messages ? (
    <Portal id="global-error-modal">
      <Backdrop onClick={handleCloseModal}>
        <Dialog onClick={handleClickDialog}>
          <Header
            title={title || t('default', { count: messages.length })}
            subtitle={t('checkProblemBelow', { count: messages.length })}
            iconComponent={<FiXOctagon size="3.2rem" />}
            closeButtonComponent={
              <CloseButton onClick={handleCloseModal}>
                <FiX />
              </CloseButton>
            }
          />

          <Body>
            {messages.map((message) => {
              return (
                <ErrorItem key={message}>
                  <FiCircle />
                  <span>{message}</span>
                </ErrorItem>
              )
            })}

            {messages.length === 0 && (
              <ErrorItem key="unknownError">
                <FiCircle />
                <span>{t('unknownError')}</span>
              </ErrorItem>
            )}
          </Body>

          <Footer>
            <ConfirmButton onClick={handleCloseModal}>
              <span>{t('Glossary:gotIt')}</span>
              <FiCheckCircle />
            </ConfirmButton>
          </Footer>
        </Dialog>
      </Backdrop>
    </Portal>
  ) : null
}

export default GlobalErrorModal
