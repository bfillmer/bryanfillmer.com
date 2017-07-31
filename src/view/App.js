
import React from 'react'
import {ThemeProvider} from 'styled-components'

import {Routes} from 'view/Routes'

import {theme} from 'view/theme'

export const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
)
