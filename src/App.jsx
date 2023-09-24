import { ThemeProvider, Typography } from '@mui/material'
import theme from './themes/default'


function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Typography variant='h1' color={'primary'}>APP</Typography>
      </ThemeProvider>

    </div>
  )
}

export default App
