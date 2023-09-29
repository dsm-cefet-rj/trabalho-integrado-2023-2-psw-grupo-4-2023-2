import { Avatar, Card, Container, Typography, TextField } from '@mui/material';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import { Box } from '@mui/system'
import React from 'react'
import './PerfilUsuario.css'

const PerfilUsuario = () => {
  return (
    <Container maxWidth='sm'>
        <Box sx={{margin: '30px'}}>
            <Typography variant='h5' color={'white'}>Meus Dados</Typography>
            <Card sx={{display:'flex', backgroundColor: 'goldenrod', alignItems:'center', gap: 2, pl: 2}}>
                <Avatar><AccountCircleTwoTone /></Avatar>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'white'}>Nome:</Typography>
                        <TextField variant="standard"  margin="dense"
                            id="nome-usuario"
                            defaultValue="Renan Lima"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'white'}>Email:</Typography>
                        <TextField variant="standard" margin="dense"
                            id="email-usuario"
                            defaultValue="teste@lolmail.com"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                    </Box>
                </Box>
            </Card>
        </Box>
       
        <Box sx={{margin: '30px'}}>
            <Typography variant='h5' color={'white'}>Assinatura e cobrança</Typography>
            <Card sx={{display:'flex', backgroundColor: 'goldenrod', alignItems:'center', gap: 2, pl: 2}}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <EventIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                        <Typography variant='h6' color={'white'}>Data de cobrança:</Typography>
                        <TextField variant="standard"  margin="dense"
                            id="data-cobrança"
                            defaultValue="Renan Lima"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <CreditCardIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />  
                        <Typography variant='h6' color={'white'}>Pagamento</Typography>
                        <TextField variant="standard" margin="dense"
                            id="forma-pagamento"
                            defaultValue="teste@lolmail.com"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Box>
                </Box>
            </Card>
        </Box>

        <Box sx={{margin: '30px'}}>
            <Typography variant='h5' color={'white'}>Informações pessoais</Typography>
            <Card sx={{display:'flex', backgroundColor: 'goldenrod', alignItems:'center', gap: 2, pl: 2}}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'white'}>Nome:</Typography>
                        <TextField variant="standard"  margin="dense"
                            id="nome-usuario2"
                            defaultValue="Renan Lima"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'white'}>Email:</Typography>
                        <TextField variant="standard" margin="dense"
                            id="email-usuario2"
                            defaultValue="teste@lolmail.com"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'white'}>Celular:</Typography>
                        <TextField variant="standard" margin="dense"
                            id="celular-usuario2"
                            defaultValue="+55 (21) 9387-4293"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                    </Box>
                    <Box sx={{display:'flex', gap:1, alignItems: 'center'}}>
                        <Typography variant='h6' color={'white'}>Endereço:</Typography>
                        <TextField variant="standard" margin="dense"
                            id="endereco-usuario2"
                            defaultValue="Av. maracanã"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                    </Box>
                </Box>
            </Card>
        </Box>
            

        
    </Container>
)
}

export default PerfilUsuario