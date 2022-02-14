import React, { useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { Spinner } from 'src/components/Spinners'
import { useIsLoading, useTypedSelector } from 'src/hooks'
import { SpinnerWithText } from 'src/components/SpinnerWithText'
import { FullHeightSpinnerContainer } from 'src/components/Containers'
import {
  AUTHORIZATION_TYPES,
  requestFetchPagePermissions,
} from 'src/store/ducks/authorization'

import { PageAccessNotAuthorized } from '../PageAccessNotAuthorized'

export interface PageAccessVerifierProps {
  page: number
}

export const PageAccessVerifier: React.FC<PageAccessVerifierProps> = ({
  page,
  children,
}) => {
  const { t } = useTranslation('Authorization')
  const dispatch = useDispatch()

  const isCheckingPermissions = true
  // const isCheckingPermissions = useIsLoading(
  //   AUTHORIZATION_TYPES.REQUEST_FETCH_PAGE_PERMISSIONS,
  // )

  const isAuthorized = useTypedSelector(({ Authorization }): boolean => {
    const permissions = Authorization.pagePermissions[page]
    return permissions?.canSeePage || false
  })

  console.log('Autorização', isAuthorized)

  // useLayoutEffect(() => {
  //   dispatch(requestFetchPagePermissions({ page, userId: 0 }))
  // }, [dispatch, page])

  if (isCheckingPermissions) {
    return (
      <FullHeightSpinnerContainer>
        <SpinnerWithText hasSpinnerOnTheLeft>
          <Spinner />
          <span>{t('loadingText')}</span>
        </SpinnerWithText>
      </FullHeightSpinnerContainer>
    )
  }

  if (isAuthorized) return <>{children}</>

  return (
    <PageAccessNotAuthorized
      title={t('accessNotAuthorized')}
      message={t('pageAccessNotAuthorized')}
    />
  )
}
