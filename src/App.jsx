import { ThemeProvider } from '@mui/material'
import theme from './themes/default'
import { Router } from './Router'

import livrosData from '../data/livros.json'
import { useState } from 'react'

import { Autenticacao } from './contexts/Autenticacao'

function App() {
  const [livros, setLivros] = useState(livrosData);
  const [favoritos, setfavoritos] = useState();

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
