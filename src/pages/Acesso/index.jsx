import { Box, Stack } from '@mui/system'
import React, { useContext, useState } from 'react'
import imagemPrincipalHome from '../../assets/imagem-principal-home.jpg'
import { Alert, AppBar, Backdrop, Button, Card, CircularProgress, Container, FormControl, FormGroup, Grid, IconButton, LinearProgress, Modal, Paper, Snackbar, TextField, Toolbar, Typography } from '@mui/material'
import Logo from '../../components/Logo/Logo'
import { AutenticacaoContext } from '../../contexts/Autenticacao'
import { Cancel } from '@mui/icons-material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const Acesso = () => {
  const { cadastrar, acessar } = useContext(AutenticacaoContext);

  const handleCloseAlertMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlertMessage(false);
  };


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [celular, setCelular] = useState('');
  const [endereco, setEndereco] = useState('');

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
    setEmail('');
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
  const handleEmail = (event) => {
    setEmail(event.target.value);
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
      cadastrar(nome, email, password, endereco, celular);
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
      if (acessar(email, password)) { /* empty */ } else {
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
    }
  };

  //Funções da tabela

  const planos = [
    {id:1, nome:'Básico mensal', preco: 9.99, desconto: '', acesso: false, fav: '20', livPre: false, renovacao: false},
    {id:2, nome:'Básico anual', preco: 8.50 , desconto: '15%', acesso: false, fav: '20', livPre: false, renovacao: true},
    {id:3, nome:'Premium mensal', preco: 19.99, desconto: '', acesso: true, fav: 'Ilimitados', livPre: true, renovacao: false},
    {id:4, nome:'Premium anual', preco: 16.99, desconto: '15%', acesso: true, fav: 'Ilimitados', livPre: true},
  ];


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

      <Box>
        <Container sx={{width: '80hv', margin: 'auto', p:'50px'}}>
          <Box>
            <Typography variant='h1' color={'primary'} sx={{fontSize: {xs:'5vw', lg:'3vw'}}}>Descubra um Mundo de Leitura com LeiaMais!</Typography>
            <Typography variant='body1' sx={{  textAlign: 'justify', fontSize: '18px', margin:'10px 0', }}>
              Você já sonhou em explorar novos mundos, viver aventuras emocionantes e conhecer personagens cativantes, tudo isso sem sair do conforto do seu lar? Se a resposta é sim, então LeiaMais é a plataforma perfeita para você!.
            </Typography>
          </Box>

          <Box>
            <Typography variant='h4' color={'secondary'}>Desvende Mundos com LeiaMais</Typography>
            <Typography variant='body1' sx={{  textAlign: 'justify', fontSize: '18px', margin:'10px 0', }}>
              LeiaMais é muito mais do que apenas uma plataforma de leitura online. É um portal que abre as portas para um universo ilimitado de histórias e conhecimento. Com um vasto acervo de livros de todos os gêneros imagináveis, desde romances épicos até thrillers emocionantes, temos algo para todos os gostos.
            </Typography>
          </Box>

          <Box>
            <Typography variant='h4' color={'secondary'}>Uma Nova Aventura a Cada Página</Typography>
            <Typography variant='body1' sx={{  textAlign: 'justify', fontSize: '18px', margin:'10px 0', }}>
              Nosso lema, "Desvende Mundos: onde cada página é uma Nova Aventura!", resume perfeitamente o que oferecemos. A cada clique, você se transportará para um universo único, cheio de emoção, mistério e descobertas. Deixe-se envolver por histórias que o levarão a lugares que você jamais imaginou.
            </Typography>
          </Box>

          <Box>
            <Typography variant='h3' color={'secondary'}>Conheça nossos planos</Typography>

            <Box display={'flex'}>
              {planos.map((plano,id) => (
                <Card sx={{borderRadius:'20px', margin:'20px', minWidth:'166px'}}>
                  
                  <Typography variant='h4' color={'primary'} sx={{backgroundColor: 'secondary.main', padding:'10px 0', textAlign: 'center', fontSize:'30px'}}>{plano.nome}</Typography>
                  
                  <Box sx={{display:'flex',justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', paddingTop:'10px'}}>
                    
                    {plano.desconto && 
                        <Box display={'flex'} sx={{aliginItens: 'center'}}>
                          <Typography variant='body1' sx={{fontSize: '18px',}}><s>R$ {planos[id-1].preco*12}</s></Typography>
                          <Typography variant='body1'  sx={{ fontSize: '18px',backgroundColor: 'secondary.main', padding:'2px 10px', borderRadius:'15px'}}>Economize {plano.desconto}</Typography>
                        </Box>
                      }
                    <Typography variant='h5' color={'primary'}>R$ {plano.preco}<sub>/mês</sub></Typography>
                    <Typography variant='body1'  sx={{fontSize: '18px',}}>Total: R$ {plano.preco *12} <sub>/ano</sub> </Typography>
                    <Typography variant='body1'  sx={{textAlign:'center', fontSize: '18px',}}>{plano.renovacao? 
                        <><CheckIcon></CheckIcon> Com renovação automática </>:
                        <><CloseIcon></CloseIcon> Sem renovação automática</> }
                      </Typography>
                    <Typography variant='body1'  sx={{fontSize: '18px',}}> {plano.fav} favoritos</Typography>
                    <Typography variant='body1'  sx={{fontSize: '18px',}}>{plano.livPre? 
                        <><CheckIcon></CheckIcon> Livros premium </>:
                        <><CloseIcon></CloseIcon> Sem livros premium</> }
                      </Typography>
                      <Typography variant='body1' sx={{fontSize: '18px',}}>{plano.acesso? 
                        <><CheckIcon></CheckIcon> Acesso antecipado </>:
                        <><CloseIcon></CloseIcon> Sem acesso antecipado</> }
                      </Typography>

                  </Box>
                  
                </Card>
              ))}
            </Box>


          </Box>
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
                    <Grid item xs={12}>
                      <TextField fullWidth value={endereco} autoComplete="off" type='text' label="endereço" onChange={handleEndereco}></TextField>
                    </Grid>
                    
                  </>
                  )
                }

                <Grid item xs={12}>
                  <TextField fullWidth value={email} autoComplete="off" type='email' label="email" onChange={handleEmail}></TextField>
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