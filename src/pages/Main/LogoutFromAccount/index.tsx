import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiLogOut } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { ConfirmModal } from 'src/components'
import { useToggleFunctions } from 'src/hooks'
import { requestLogout } from 'src/store/ducks/auth'

import { Container, LogoutButton } from './styles'

const LogoutFromAccount: React.FC = () => {
  const { t } = useTranslation(['Main', 'Glossary'])
  const dispatch = useDispatch()
  const history = useHistory()

  const [isShowingModal, handleShowModal, handleHideModal] =
    useToggleFunctions()

  const handleLogout = () => {
    dispatch(
      requestLogout(() => {
        history.push('/')
      }),
    )
  }

  return (
    <Container>
      <ConfirmModal
        isShowing={isShowingModal}
        handleHideModal={handleHideModal}
        title={t('logoutConfirmationTitle')}
        message={t('logoutConfirmationMessage')}
        confirmButtonText={t('Glossary:leave')}
        confirmButtonType="danger"
        onConfirm={handleLogout}
        iconComponent={<FiLogOut size="2.4rem" />}
      />

      <LogoutButton onClick={handleShowModal}>
        <span>{t('logoutButton')}</span>
        <FiLogOut />
      </LogoutButton>
    </Container>
  )
}

export default LogoutFromAccount
