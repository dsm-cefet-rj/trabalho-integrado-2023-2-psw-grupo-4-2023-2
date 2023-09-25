import { ThemeProvider } from '@mui/material'
import theme from './themes/default'
import { Router } from './Router'

import { Autenticacao } from './contexts/Autenticacao'
import Livros from './contexts/Livros'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Livros>
          <Autenticacao>
            <Router />
          </Autenticacao>
        </Livros>
      </ThemeProvider>
    </div>
  )
}

export default App
