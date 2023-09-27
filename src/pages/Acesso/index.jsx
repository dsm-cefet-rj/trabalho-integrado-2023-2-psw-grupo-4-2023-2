import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import imagemPrincipalHome from '../../assets/imagem-principal-home.jpg'
import { Alert, AppBar, Button, Container, Grid, IconButton, Modal, Snackbar, TextField, Toolbar, Typography } from '@mui/material'
import Logo from '../../components/Logo/Logo'
import { AutenticacaoContext } from '../../contexts/Autenticacao'
import { Cancel } from '@mui/icons-material'


const Acesso = () => {
  const { cadastrar, acessar } = useContext(AutenticacaoContext);

  const handleSignup = () => {
    cadastrar(nome, login, password);
    setOpenCadastro(false);
    setOpenLogin(true);
  };

  const handleSignin = () => {
    setOpenAlertMessage(true);
    if (acessar(login, password)) {
    } else {

    }
  };

  const [openAlertMessage, setOpenAlertMessage] = useState(false);

  const handleCloseAlertMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlertMessage(false);
  };

  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [openCadastro, setOpenCadastro] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenCadastro = () => setOpenCadastro(true);
  const handleCloseCadastro = () => {
    setNome('');
    setLogin('');
    setPassword('');
    setOpenCadastro(false);
  }
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => {
    setLogin('');
    setPassword('');
    setOpenLogin(false)
  };


  const handleNome = (event) => {
    setNome(event.target.value);
  };
  const handleLogin = (event) => {
    setLogin(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };


  return (
    <>
      <AppBar sx={{ paddingY: 3 }}>
        <Container maxWidth='xl'>
          <Toolbar>
            <Logo />
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{
              display: 'flex',
              gap: 1
            }}>
              <Button variant='contained' color='secondary' onClick={handleOpenLogin}>LOGIN</Button>
              <Button variant='outlined' color='secondary' onClick={handleOpenCadastro}>CADASTRO</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{
        backgroundImage: `url(${imagemPrincipalHome})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '100vh',
      }}>

      </Box>

      <Modal
        open={openCadastro}
        onClose={handleCloseCadastro}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >


        <Container maxWidth='sm' sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh'
        }}>
          <Box maxWidth='sm' sx={{
            position: 'relative',
            bgcolor: 'background.default',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
          }}>
            <IconButton sx={{
              position: 'absolute',
              top: 0,
              right: 0
            }}
              onClick={handleCloseCadastro}
            >
              <Cancel fontSize='small' color='secondary'></Cancel>
            </IconButton>
            <Grid container spacing={2} >
              <Grid item xs={12} >
                <Typography variant='h4' textAlign={'center'} color={'secondary'}>Cadastro</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth value={nome} autoComplete="off" type='text' label="nome" onChange={handleNome}></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth value={login} autoComplete="off" type='email' label="email" onChange={handleLogin}></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth value={password} autoComplete="off" type='password' label="senha" onChange={handlePassword}></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant='contained'color='secondary' onClick={handleSignup}>Cadastrar</Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Modal>
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth='sm' sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh'
        }}>
          <Box maxWidth='sm' sx={{
            position: 'relative',
            bgcolor: 'background.default',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
          }}>
            <IconButton sx={{
              position: 'absolute',
              top: 0,
              right: 0
            }}
              onClick={handleCloseLogin}
            >
              <Cancel fontSize='small' color='secondary'></Cancel>
            </IconButton>
            <Grid container spacing={2} >
              <Grid item xs={12} >
                <Typography variant='h4' textAlign={'center'} color={'secondary'}>Login</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth value={login} autoComplete="off" type='email' label="email" onChange={handleLogin}></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth value={password} autoComplete="off" type='password' label="senha" onChange={handlePassword}></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant='contained' color='secondary' onClick={handleSignin}>Login</Button>
              </Grid>
            </Grid>           
          </Box>
        </Container>
      </Modal>

      <Snackbar open={openAlertMessage} autoHideDuration={2500} onClose={handleCloseAlertMessage} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseAlertMessage} severity="error" variant='filled' sx={{ width: '100%' }}>
          E-mail ou senha incorretos. Tente novamente.
        </Alert>
      </Snackbar>
    </>
  )
}

export default Acesso