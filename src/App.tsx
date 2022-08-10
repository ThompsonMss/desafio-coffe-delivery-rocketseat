import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/theme/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Teste</h1>
    </ThemeProvider>
  )
}

export default App
