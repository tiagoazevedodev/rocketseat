import { useState } from 'react'
import { Button } from './components/Button'
import { defaultTheme } from './styles/themes/default'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant='primary' />
      <Button variant='secondary' />
      <Button variant='danger' />
      <Button variant='success' />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
