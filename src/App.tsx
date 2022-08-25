import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/theme/defaultTheme'
import { RoutesController } from '@/routes'
import { MainContext } from './context/Main'

import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <MainContext>
        <RoutesController />
      </MainContext>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
