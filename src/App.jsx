import { ThemeProvider, Typography } from '@mui/material'
import theme from './themes/default'
import Logo from './components/Logo/Logo'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'


function App() {

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>

        <Navbar toggleDrawer={toggleDrawer} />
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
        <Typography variant='h1' color={'primary'}>APP</Typography>
      </ThemeProvider>

    </div>
  )
}

export default App
