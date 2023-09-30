import { Avatar, Card, Container, Typography, TextField, Button, MenuItem, Select } from '@mui/material';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import { Box } from '@mui/system'
import React, { useState, useContext } from 'react';
import { AutenticacaoContext } from "../../contexts/Autenticacao";

const PerfilUsuario = () => {
    const [readOnly, setReadOnly] = useState(true);
    const { usuario, sair } = useContext(AutenticacaoContext);

    const formasPagamento = [{value:'Débito'}, {value:'Crédito'}, {value:'Pix'}, {value:'Boleto'}];

    const perfil ={
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.passaword,
        endereco: 'Av. maracanã',
        celular: '+55 (21) 9387-4293',
        formaPagamento: "Débito",
        dataCobranca: '22/08/2023',
    }

    const editarDados = () => {
        setReadOnly(false);
        console.log("editar dados");
        console.log(readOnly);
    };

    const salvarDados = () => {
        setReadOnly(true);
        console.log("salvar dados");
    }

  return (
    <Container maxWidth='sm'>
        <Box sx={{margin: '30px'}}>
            <Typography variant='h5' color={'secondary'}>Meus Dados</Typography>
            <Card sx={{display:'flex', backgroundColor: 'white', alignItems:'center', gap: 2, pl: 2, borderRadius: '15px'}}>
                <Avatar><AccountCircleTwoTone /></Avatar>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Nome:</Typography>
                        <TextField variant="standard"  margin="dense"
                            id="nome-usuario"
                            defaultValue={perfil.nome}
                            InputProps={{
                                readOnly,
                              }}
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Email:</Typography>
                        <TextField variant="standard" margin="dense"
                            id="email-usuario"
                            defaultValue={perfil.email}
                            InputProps={{
                                readOnly,
                              }}
                        />
                    </Box>
                </Box>
            </Card>
        </Box>
       
        <Box sx={{margin: '30px'}}>
            <Typography variant='h5' color={'secondary'}>Assinatura e cobrança</Typography>
            <Card sx={{display:'flex', backgroundColor: 'white', alignItems:'center', gap: 2, pl: 2, borderRadius: '15px'}}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <EventIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                        <Typography variant='h6' color={'black'}>Data de cobrança:</Typography>
                        <TextField variant="standard"  margin="dense"
                            id="data-cobrança"
                            defaultValue={perfil.dataCobranca}
                            InputProps={{
                                readOnly,
                              }}
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
                <Box display={'flex'} flexDirection={'column'}>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Nome:</Typography>
                        <TextField variant="standard"  margin="dense"
                            id="nome-usuario2"
                            defaultValue={perfil.nome}
                            InputProps={{
                                readOnly,
                              }}
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Email:</Typography>
                        <TextField variant="standard" margin="dense"
                            id="email-usuario2"
                            defaultValue={perfil.email}
                            InputProps={{
                                readOnly,
                              }}
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Celular:</Typography>
                        <TextField variant="standard" margin="dense"
                            id="celular-usuario"
                            defaultValue={perfil.celular}
                            InputProps={{
                                readOnly,
                              }}
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'black'}>Endereço:</Typography>
                        <TextField variant="standard" margin="dense"
                            id="endereco-usuario2"
                            defaultValue={perfil.endereco}
                            InputProps={{
                                readOnly,
                              }}
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