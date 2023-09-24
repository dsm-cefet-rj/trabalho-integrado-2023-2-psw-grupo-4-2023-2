import { ThemeProvider } from '@mui/material'
import theme from './themes/default'
import { Router } from './Router'


function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>

    </div>
  )
}

export default App
