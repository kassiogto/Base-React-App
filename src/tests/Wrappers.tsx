import React from 'react'
import { ThemeProvider } from 'styled-components'

import { LIGHT_THEME } from 'src/styles'

export const LightThemeWrapper: React.FC = ({ children }) => {
  return <ThemeProvider theme={LIGHT_THEME}>{children}</ThemeProvider>
}
