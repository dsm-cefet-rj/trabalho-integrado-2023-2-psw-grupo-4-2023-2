import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import imagemPrincipalHome from '../../assets/imagem-principal-home.jpg'
import { Alert, AppBar, Backdrop, Button, CircularProgress, Container, FormControl, FormGroup, Grid, IconButton, LinearProgress, Modal, Snackbar, TextField, Toolbar, Typography } from '@mui/material'
import Logo from '../../components/Logo/Logo'
import { AutenticacaoContext } from '../../contexts/Autenticacao'
import { Cancel } from '@mui/icons-material'


const Acesso = () => {
  const { cadastrar, acessar } = useContext(AutenticacaoContext);

  const handleCloseAlertMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlertMessage(false);
  };


  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [openAlertMessage, setOpenAlertMessage] = useState(false);
  const [typeMessage, setTypeMessage] = useState('info');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertDuration, setAlertDuration] = useState(3000);


  const [inProgress, setInProgress] = useState(false);

  const [openLoading, setOpenLoading] = useState(false);

  const handleOpenCadastro = () => {
    setIsLogin(false);
    setOpenModal(true);
  };

  const handleCloseCadastro = () => {
    setNome('');
    setLogin('');
    setPassword('');
    setOpenModal(false);
  }

  const handleOpenLogin = () => {
    setIsLogin(true);
    setOpenModal(true);
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

  const handleSignup = () => {
    setOpenLoading(true);
    setInProgress(true);

    setTimeout(() => {
      cadastrar(nome, login, password);
      setIsLogin(true);
      handleCadastrado();
      setInProgress(false);
      setOpenLoading(false);
    }, 2000);

  };

  const handleSignin = () => {
    setOpenLoading(true);

    setTimeout(() => {
      if (acessar(login, password)) {
      } else {
        handleLoginErro();
      }
      setOpenLoading(false)
    }, 2000);


  };

  const handleLoginErro = () => {
    setTypeMessage('error');
    setAlertMessage('E-mail ou senha incorretos. Tente novamente.');
    setOpenAlertMessage(true);
  };

  const handleCadastrado = () => {
    setTypeMessage('success');
    setAlertMessage('Usuário cadastrado com sucesso! Faço seu login usando o e-mail e senha cadastrados.');
    setOpenAlertMessage(true);
    setAlertDuration(6000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      handleSignin()
    }
    else {
      handleSignup()
    };


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
        open={openModal}
        onClose={handleCloseCadastro}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >


        <Container maxWidth='xs' sx={{
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
              <Cancel fontSize='small' color='primary'></Cancel>
            </IconButton>

            <form onSubmit={handleSubmit} >
              <Grid container spacing={2} >
                <Grid item xs={12} >
                  <Typography variant='h4' textAlign={'center'} color={'primary'}>
                    {isLogin ? 'Login' : 'Cadastro'}
                  </Typography>
                </Grid>
                {isLogin
                  ? null
                  : <Grid item xs={12}>
                    <TextField fullWidth value={nome} autoComplete="off" type='text' label="nome" onChange={handleNome}></TextField>
                  </Grid>
                }

                <Grid item xs={12}>
                  <TextField fullWidth value={login} autoComplete="off" type='email' label="email" onChange={handleLogin}></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth value={password} autoComplete="off" type='password' label="senha" onChange={handlePassword}></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button type='submit' fullWidth variant='contained' color='primary'>{isLogin ? 'Login' : 'Cadastro'}</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button fullWidth variant='outlined' color='primary' onClick={isLogin ? handleOpenCadastro : handleOpenLogin}>{isLogin ? 'Cadastro' : 'Login'}</Button>
                </Grid>

                <Grid item xs={12} height={2}>
                  {inProgress && <LinearProgress />}
                </Grid>
              </Grid>
            </form>



          </Box>
        </Container>
      </Modal>
      <Snackbar open={openAlertMessage} autoHideDuration={alertDuration} onClose={handleCloseAlertMessage} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseAlertMessage} severity={typeMessage} variant='filled' sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>

      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
        open={openLoading}
      >
        {isLogin && <CircularProgress color="secondary" />}
      </Backdrop>
    </>
  )
}

export default Acesso