import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ErrorBoundary } from 'react-error-boundary'

import { Store } from 'src/store'
import { AppRoutes } from 'src/routes'
import { LIGHT_THEME, GlobalStyles } from 'src/styles'

import ErrorFallback from './ErrorFallback'
import GlobalErrorModal from './GlobalErrorModal'
import GlobalSuccessToast from './GlobalSuccessToast'

import 'src/locales'
import 'typeface-open-sans'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyles />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={Store}>
          <GlobalSuccessToast />
          <GlobalErrorModal />
          <AppRoutes />
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
