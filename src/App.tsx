import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/theme/defaultTheme'
import { RoutesController } from '@/routes'
import { MainContext } from './context/Main'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <MainContext>
        <RoutesController />
      </MainContext>
    </ThemeProvider>
  )
}

export default App
