import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import imagemPrincipalHome from '../../assets/imagem-principal-home.jpg'
import { AppBar, Button, Container, Modal, Stack, TextField, Toolbar, Typography } from '@mui/material'
import Logo from '../../components/Logo/Logo'
import { AutenticacaoContext } from '../../contexts/Autenticacao'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Acesso = () => {
  const { signup, signin} = useContext(AutenticacaoContext);

  const handleSignup = () => {
    console.log(nome, login, password);
    signup(nome, login, password);
    setOpenCadastro(false);
    setOpenLogin(true);
  };
  
  const handleSignin = () => {
    console.log(nome, login, password);
    signin(login, password)
  };

  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [openCadastro, setOpenCadastro] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenCadastro = () => setOpenCadastro(true);
  const handleCloseCadastro = () => {
    setOpenCadastro(false);

  }
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => {
    setOpenLogin(false)
  };


  const handleNome = (event) => {
    setNome(event.target.value);
    console.log(nome)
  };
  const handleLogin = (event) => {
    setLogin(event.target.value);
    console.log(login)
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password)
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
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2}>
            <Typography variant='h4' color={'primary'}>Login</Typography>
            <TextField value={login} type='text' label="login ou email" onChange={handleLogin}></TextField>
            <TextField value={password} type='password' label="password" onChange={handlePassword}></TextField>
            <Button variant='contained' onClick={handleSignin}>Acessar</Button>
          </Stack>
        </Box>
      </Modal>

      <Modal
        open={openCadastro}
        onClose={handleCloseCadastro}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2}>
            <Typography variant='h4' color={'primary'}>Cadastro</Typography>
            <TextField value={nome} type='text' label="nome" onChange={handleNome}></TextField>
            <TextField value={login} type='text' label="login ou email" onChange={handleLogin}></TextField>
            <TextField value={password} type='password' label="password" onChange={handlePassword}></TextField>
            <Button variant='contained' onClick={handleSignup}>Cadastrar</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}

export default Acesso