import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/theme/defaultTheme'
import { RoutesController } from '@/routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <RoutesController />
    </ThemeProvider>
  )
}

export default App
