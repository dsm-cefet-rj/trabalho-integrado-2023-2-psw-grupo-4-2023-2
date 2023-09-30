import { Box, Stack } from '@mui/system'
import React, { useContext, useState } from 'react'
import imagemPrincipalHome from '../../assets/imagem-principal-home.jpg'
import { Alert, AppBar, Backdrop, Button, CircularProgress, Container, FormControl, FormGroup, Grid, IconButton, LinearProgress, Modal, Paper, Snackbar, TextField, Toolbar, Typography } from '@mui/material'
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
  const [celular, setCelular] = useState('');

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
  const handleCelular = (event) => {
    setCelular(event.target.value);
  };
  const handleEndereco = (event) => {
    setEndereco(event.target.value);
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
    setOpenModal(false);

    setTimeout(() => {
      if (acessar(login, password)) {
      } else {
        setOpenModal(true);
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
      <AppBar>
        <Container maxWidth='xl'>
          <Toolbar sx={{justifyContent:{xs:'center', sm:'space-between'}}}>
            <Logo/>
            <Stack direction={'row'} spacing={1} sx={{display:{xs:'none', sm:'block'}}}>
              <Button variant='contained' color='secondary' onClick={handleOpenLogin}>Login</Button>
              <Button variant='outlined' color='secondary' onClick={handleOpenCadastro}>Assine</Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, display:{xs:'block', sm:'none'} }}>
        <Container>
          <Toolbar>
            <Stack direction={'row'} spacing={1} useFlexGap width={'100%'}>
              <Button fullWidth variant='contained' color='secondary' onClick={handleOpenLogin}>Login</Button>
              <Button fullWidth variant='outlined' color='secondary' onClick={handleOpenCadastro}>Assine</Button>
            </Stack>
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


        <Container maxWidth='lg'>
          <Stack sx={{
            alignItems: 'center',
            width: '100%',
            pt: '128px'
          }}
            spacing={4}>
             <Paper sx={{ bgcolor: 'primary.main', px: {xs:4, md:8}, py: 4 }} >
              <Typography variant='h2' color={'secondary'} sx={{fontSize: {xs:'5vw', lg:'3vw'}}}>O maior clube de livros do Brasil</Typography>
            </Paper>

            <Paper sx={{ bgcolor: 'secondary.main', px: {xs:4, md:8}, py: 2 }}>
              <Typography variant='h4' color={'primary'}  sx={{fontSize: {xs:'3vw', lg:'2vw'}}} >Acesse nosso mundo de livros digitais.</Typography>
            </Paper>
            <Button variant='contained' color='success' onClick={handleOpenCadastro}>Assine o LeiaMais!</Button>
          </Stack>
        </Container>
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
                  :( 
                  <>
                  <Grid item xs={12}>
                      <TextField fullWidth value={nome} autoComplete="off" type='text' label="nome" onChange={handleNome}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth value={celular} autoComplete="off" type='text' label="celular" onChange={handleCelular}></TextField>
                    </Grid>
                    
                  </>
                  )
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