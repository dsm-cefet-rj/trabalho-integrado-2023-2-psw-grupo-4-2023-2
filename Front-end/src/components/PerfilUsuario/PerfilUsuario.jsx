import { Avatar, Card, Container, Typography, TextField, Button, MenuItem, Snackbar, Alert , Modal} from '@mui/material';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import { Box } from '@mui/system'
import React, { useState, useContext, useEffect } from 'react';
import { AutenticacaoContext } from "../../contexts/Autenticacao";

const PerfilUsuario = () => {
    const [readOnly, setReadOnly] = useState(true);
    const { usuario, sair, setUsuario} = useContext(AutenticacaoContext);

    const [openModal, setOpenModal] = useState(false);
    
    const [openAlertMessage, setOpenAlertMessage] = useState(false);
    const [typeMessage, setTypeMessage] = useState('info');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertDuration, setAlertDuration] = useState(3000);

    const formasPagamento = [{value:'Débito'}, {value:'Crédito'}, {value:'Pix'}, {value:'Boleto'}];

    const [nomeNovo, setNomeNovo] = useState(usuario.nome);
    const [emailNovo, setEmailNovo] = useState(usuario.email);
    const [enderecoNovo, setEnderecoNovo] = useState(usuario.endereco);
    const [celularNovo, setCelularNovo] = useState(usuario.celular);
    const [senhaNova, setSenhaNova] = useState(usuario.password);

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

    // useEffect(()=>{
    //     console.log(usuario);
    // },[usuario]);

    const salvarDados = () => {
        if(validarCampos()){
            mensagemSucesso('Dados alterados com sucesso.');
            setReadOnly(true);
            setUsuario({...usuario, nome:nomeNovo, email: emailNovo,celular:celularNovo, endereco:enderecoNovo});
        }
    }

    const cancelarDados = () => {
        document.getElementById('nome').value = usuario.nome;
        document.getElementById('email').value = usuario.email;
        document.getElementById('celular').value = usuario.celular;
        document.getElementById('endereco').value = usuario.endereco;
        setReadOnly(true);
    }

    const mensagemError = (texto) => {
        setTypeMessage('error');
        setAlertMessage(texto);
        setOpenAlertMessage(true);
    };

    const mensagemSucesso = (texto) => {
        setTypeMessage('success');
        setAlertMessage(texto);
        setOpenAlertMessage(true);
        setAlertDuration(6000);
    };

    const alterarSenha = () => {
        setOpenModal(true);
    }

    const fecharModal = () => {
        setOpenModal(false);
    }

    const cancelarSenha = () => {
        fecharModal();
    }

    const salvarNovaSenha = () => {
        if(validarSenhaNova()){
            const senha = document.getElementById('novaSenha').value.trim();
            setUsuario({ ...usuario, password: senha });
            mensagemSucesso('Nova senha salva com sucesso');
            fecharModal();
        }
    }
    
    const validarSenhaNova= () => {
        const inputSenhaAtual = document.getElementById('senhaAtual');
        const senhaAtual = inputSenhaAtual.value.trim();

        const inputNovaSenha = document.getElementById('novaSenha');
        const novaSenha = inputNovaSenha.value.trim();

        if (senhaAtual === '') {
            mensagemError('Por favor preencha o campo senha atual');
            inputSenhaAtual.focus();
            return false;
        }
        else if(senhaAtual != usuario.password){
            mensagemError('A senha atual está incorreta');
            console.log("Senha atual: "+senhaAtual+ " password: "+ usuario.password);
            inputSenhaAtual.focus();
            return false;
        }
        else if (novaSenha === '') {
            mensagemError('Por favor preencha o campo senha nova');
            inputNovaSenha.focus();
            return false;
        }
        else if(senhaAtual === novaSenha){
            mensagemError('A nova senha deve ser diferente da senha antiga');
            inputNovaSenha.focus();
            return false;
        }
        return true;
    }
   
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
                mensagemError('Por favor preencha o campo '+ id);
                input.focus();
                validar = false;
                break;
            }
            if( id === 'email' && !regexEmail.test(input.value.trim())){
                mensagemError('Por favor preencha o campo '+ id + " no formato nome@email");
                input.focus();
                validar = false;
                break;
            }
            if( id === 'celular' && !regexCelular.test(input.value.trim())){
                mensagemError('Por favor preencha o campo '+ id + " no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX");
                input.focus();
                validar = false;
                break;
            }
        }            
        return validar;
    }

  return (
<>
    <Container maxWidth='sm'>

        <Snackbar open={openAlertMessage} autoHideDuration={alertDuration} onClose={handleCloseAlertMessage} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleCloseAlertMessage} severity={typeMessage} variant='filled' sx={{ width: '100%' }}>
            {alertMessage}
            </Alert>
        </Snackbar>

        <Box sx={{margin: '30px'}}>
            <Typography variant='h5' color={'secondary'}>Meus Dados</Typography>
            <Card sx={{display:'flex', backgroundColor: 'white', alignItems:'center', gap: 2,  p: '20px', borderRadius: '15px'}}>
                <Avatar style={{ width: '50px', height: '50px' }}><AccountCircleTwoTone style={{ width: '50px', height: '50px' }}/></Avatar>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Nome:</Typography>
                        <Typography variant='h6' color={'black'}>{usuario.nome}</Typography>
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Email:</Typography>
                        <Typography variant='h6' color={'black'}>{usuario.email}</Typography>
                    </Box>
                    <Box>
                        <Button onClick={alterarSenha} variant="contained" color="secondary">
                            Alterar senha
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Box>
       
        <Box sx={{margin: '30px'}}>
            <Typography variant='h5' color={'secondary'}>Assinatura e cobrança</Typography>
            <Card sx={{display:'flex', backgroundColor: 'white', alignItems:'center', gap: 2, borderRadius: '15px', p: '20px'}}>
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
            <Card sx={{display:'flex', backgroundColor: 'white', alignItems:'center', gap: 2, borderRadius: '15px',p: '20px'}}>
                <Box display={'flex'} flexDirection={'column'} minWidth={'100%'}>
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
                            type="email"
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
            
            { readOnly ?
                <>
                    <Button onClick={sair} variant="contained" color="error">
                        Finalizar sessão
                    </Button>
                    <Button onClick={editarDados} variant="contained" color="secondary">
                        Editar dados
                    </Button>
                </>:<>
                    <Button onClick={cancelarDados} variant="contained" color="error">
                        Cancelar
                    </Button>
                    <Button onClick={salvarDados} variant="contained" color="success">
                    Salvar dados
                    </Button>
                </>
            }
        </Box>
    </Container>

    <Modal
        open={openModal}
        onClose={fecharModal}
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
                p: 4, }}>
                    <Typography variant='h4' textAlign={'center'} color={'primary'}>
                        Alterar senha
                  </Typography>
                
                    <TextField variant="outlined"  margin="dense"
                        id="senhaAtual"
                        type='password'
                        fullWidth
                        label="Senha atual"
                    />
                    <TextField variant="outlined"  margin="dense"
                        id="novaSenha"
                        type='password'
                        fullWidth
                        label="Nova senha"
                    />
                <Box sx={{display:'flex', justifyContent: 'space-between', margin: '10px 0 0'}}>
                    <Button onClick={cancelarSenha} variant="contained" color="error">
                        Cancelar
                    </Button>
                    <Button onClick={salvarNovaSenha} variant="contained" color="success">
                        Salvar nova Senha
                    </Button>
                </Box>
            </Box>
        </Container>

    </Modal>
</>
)
}

export default PerfilUsuario