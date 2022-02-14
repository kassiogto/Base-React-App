import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FiCheckCircle } from 'react-icons/fi'
import { useDispatch } from 'react-redux'

import { Portal } from 'src/components'
import { useTypedSelector } from 'src/hooks'
import { hideSuccessToast } from 'src/store/ducks/success'

import { SuccessToast } from './styles'

const GlobalSuccessToast: React.FC = () => {
  const { t } = useTranslation('Success')
  const dispatch = useDispatch()

  const { isShowing, duration, messageCode } = useTypedSelector(
    ({ Success }) => Success.toast,
  )

  useEffect(() => {
    let timeout = 0

    if (isShowing) {
      timeout = window.setTimeout(() => {
        dispatch(hideSuccessToast())
      }, duration)
    }

    return () => {
      window.clearTimeout(timeout)
    }
  }, [dispatch, isShowing, duration])

  return isShowing ? (
    <Portal id="success-toast">
      <SuccessToast
        text={t(messageCode || 'default')}
        iconComponent={<FiCheckCircle />}
        duration={duration}
      />
    </Portal>
  ) : null
}

export default GlobalSuccessToast
