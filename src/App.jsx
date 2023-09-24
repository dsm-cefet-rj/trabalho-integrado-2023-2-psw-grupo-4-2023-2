import { ThemeProvider } from '@mui/material'
import theme from './themes/default'
import { Router } from './Router'
import { Autenticacao } from './contexts/Autenticacao'



function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Autenticacao>
          <Router />
        </Autenticacao>
      </ThemeProvider>

    </div>
  )
}

export default App
