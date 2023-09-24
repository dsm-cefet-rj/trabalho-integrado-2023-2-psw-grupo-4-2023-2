import { ThemeProvider, Typography } from '@mui/material'
import theme from './themes/default'
import Logo from './components/Logo/Logo'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <Typography variant='h1' color={'primary'}>APP</Typography>
      </ThemeProvider>

    </div>
  )
}

export default App
