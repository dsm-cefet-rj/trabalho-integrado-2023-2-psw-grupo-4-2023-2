import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import logo from '../../assets/img/logo.png'
import backgroundImg from '../../assets/img/imagem-principal-home.jpg'

function Acesso() {
  return (
    <div className='Acesso'>
      <div className='Access'>

            <AppBar position="sticky" sx={{ height: 128, paddingX: '64px' }}>
              <Toolbar sx={{ height: 128, paddingX: 10 }}>
                <Box
                  display='flex'
                  alignItems='center'
                >
                  <Box mr={1} component={'img'} src={logo} alt="logo" height={64} />
                  <Typography variant='h6'>
                    LeiaMais
                  </Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }} ></Box>

                <Button variant='contained' color='secondary'>Login</Button>
              </Toolbar>

            </AppBar>
            <Box sx={{ flexGrow: 1 }} >
              <img src={backgroundImg} alt="" />
              {/* */}
            </Box>
            <footer>Footer</footer>
      </div>
    </div>
  )
}

export default Acesso
