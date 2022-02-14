import { TOptions } from 'i18next'
import { useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const useSetBrowserTabTitle = (
  titleKey: string,
  tOptions?: TOptions,
) => {
  const { t } = useTranslation('PageTitles')

  useLayoutEffect(() => {
    const options = tOptions || {}
    document.title = t(titleKey, { defaultValue: t('default'), ...options })
  }, [t, tOptions, titleKey])
}
