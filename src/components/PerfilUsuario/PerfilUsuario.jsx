import { Avatar, Card, Container, Typography, TextField, Button, MenuItem, Snackbar, Alert } from '@mui/material';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import { Box } from '@mui/system'
import React, { useState, useContext } from 'react';
import { AutenticacaoContext } from "../../contexts/Autenticacao";

const PerfilUsuario = () => {
    const [readOnly, setReadOnly] = useState(true);
    const { usuario, sair, setUsuario} = useContext(AutenticacaoContext);
    
    const [openAlertMessage, setOpenAlertMessage] = useState(false);
    const [typeMessage, setTypeMessage] = useState('info');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertDuration, setAlertDuration] = useState(3000);

    const formasPagamento = [{value:'Débito'}, {value:'Crédito'}, {value:'Pix'}, {value:'Boleto'}];

    const [nomeNovo, setNomeNovo] = useState(usuario.nome);
    const [emailNovo, setEmailNovo] = useState(usuario.email);
    const [enderecoNovo, setEnderecoNovo] = useState(usuario.endereco);
    const [celularNovo, setCelularNovo] = useState(usuario.celular);


    const perfil ={
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.passaword,
        endereco: usuario.endereco,
        celular: usuario.celular,
        formaPagamento: "Débito",
        dataCobranca: '22/08/2023',
    }

    const editarDados = () => {
        setReadOnly(false);
    };

    const salvarDados = () => {
        if(validarCampos()){
            mensagemSucesso();
            setReadOnly(true);
            setUsuario({...usuario, nome:nomeNovo, email: emailNovo,celular:celularNovo, endereco:enderecoNovo});
        }
    }

    const mensagemError = (campo) => {
        setTypeMessage('error');
        setAlertMessage('Por favor preencha o campo '+ campo);
        setOpenAlertMessage(true);
    };

    const mensagemSucesso = () => {
        setTypeMessage('success');
        setAlertMessage('Dados alterados com sucesso.');
        setOpenAlertMessage(true);
        setAlertDuration(6000);
      };
    

    const handleCloseAlertMessage = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenAlertMessage(false);
    };

    function validarCampos(){
        const inputs=[ "nome",'email', 'celular', 'endereco'];
        const regexEmail = /^[^\s@]+@[^\s@]+$/;     // ou /^[^\s@]+@[^\s@]+\.[^\s@]+$/ para ser: nome@email.c;
        const regexCelular = /^\(\d{2}\)\d{4,5}-\d{4}$/;
        let validar = true;

        for (let i = 0; i < inputs.length; i++) {
            const id = inputs[i];
            const input = document.getElementById(id);
            if (input.value.trim() === '') {
                mensagemError(id);
                input.focus();
                validar = false;
                break;
            }
            if( id === 'email' && !regexEmail.test(input.value.trim())){
                mensagemError(id + " no formato nome@email");
                input.focus();
                validar = false;
                break;
            }
            if( id === 'celular' && !regexCelular.test(input.value.trim())){
                mensagemError(id + " no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX");
                input.focus();
                validar = false;
                break;
            }
        }            
        return validar;
    }

  return (

    <Container maxWidth='sm'>

        <Snackbar open={openAlertMessage} autoHideDuration={alertDuration} onClose={handleCloseAlertMessage} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleCloseAlertMessage} severity={typeMessage} variant='filled' sx={{ width: '100%' }}>
            {alertMessage}
            </Alert>
        </Snackbar>

        <Box sx={{margin: '30px'}}>
            <Typography variant='h5' color={'secondary'}>Meus Dados</Typography>
            <Card sx={{display:'flex', backgroundColor: 'white', alignItems:'center', gap: 2, pl: 2, borderRadius: '15px'}}>
                <Avatar><AccountCircleTwoTone /></Avatar>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Nome:</Typography>
                        <Typography variant='h6' color={'black'}>{usuario.nome}</Typography>
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Email:</Typography>
                        <Typography variant='h6' color={'black'}>{usuario.email}</Typography>
                    </Box>
                </Box>
            </Card>
        </Box>
       
        <Box sx={{margin: '30px'}}>
            <Typography variant='h5' color={'secondary'}>Assinatura e cobrança</Typography>
            <Card sx={{display:'flex', backgroundColor: 'white', alignItems:'center', gap: 2, pl: 2, borderRadius: '15px'}}>
                <Box display={'flex'} flexDirection={'column'} minWidth={'95%'}>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <EventIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                        <Typography variant='h6' color={'black'}>Data de cobrança:</Typography>
                        <TextField variant="standard"  margin="dense"
                            id="data-cobrança"
                            defaultValue={perfil.dataCobranca}
                            InputProps={{
                                readOnly,
                            }}
                            fullWidth
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <CreditCardIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />  
                        <Typography variant='h6' color={'black'}>Pagamento</Typography>
                        <TextField variant="standard" margin="dense"
                            id="forma-pagamento"
                            defaultValue={perfil.formaPagamento}
                            InputProps={{
                                readOnly,
                              }}
                              select
                              fullWidth
                        >
                            {formasPagamento.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                    </MenuItem>
                                ))}
                        </TextField>
                                
                    </Box>
                </Box>
            </Card>
        </Box>

        <Box sx={{margin: '30px'}}>
            <Typography variant='h5' color={'secondary'}>Informações pessoais</Typography>
            <Card sx={{display:'flex', backgroundColor: 'white', alignItems:'center', gap: 2, pl: 2, borderRadius: '15px'}}>
                <Box display={'flex'} flexDirection={'column'} minWidth={'95%'}>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Nome:</Typography>
                        <TextField variant="standard"  margin="dense"
                            id="nome"
                            onChange={(e)=> setNomeNovo(e.target.value) }
                            defaultValue={perfil.nome}
                            InputProps={{
                                readOnly,
                            }}
                            fullWidth 
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Email:</Typography>
                        <TextField variant="standard" margin="dense"
                            id="email"
                            onChange={(e)=> setEmailNovo(e.target.value) }
                            defaultValue={perfil.email}
                            InputProps={{
                                readOnly,
                            }}
                            fullWidth
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Celular:</Typography>
                        <TextField variant="standard"           margin="dense"
                            id="celular"
                            onChange={(e)=> setCelularNovo(e.target.value) }
                            defaultValue={perfil.celular}
                            InputProps={{
                                readOnly,
                            }}
                            fullWidth
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Endereço:</Typography>
                        <TextField variant="standard" margin="dense"
                            id="endereco"
                            onChange={(e)=> setEnderecoNovo(e.target.value) }
                            defaultValue={perfil.endereco}
                            InputProps={{
                                readOnly,
                            }}
                            fullWidth
                        />
                    </Box>
                </Box>
            </Card>
        </Box>
        
        <Box sx={{display:'flex', justifyContent: 'space-around', marginBottom: '30px'}}>
            <Button onClick={sair} variant="contained" color="error">
            Finalizar sessão
            </Button>
            { readOnly && 
                <Button onClick={editarDados} variant="contained" color="secondary">
                    Editar dados
                </Button>}
            { !readOnly &&
                <Button onClick={salvarDados} variant="contained" color="success">
                  Salvar dados
                </Button>}
        </Box>
    </Container>
)
}

export default PerfilUsuario