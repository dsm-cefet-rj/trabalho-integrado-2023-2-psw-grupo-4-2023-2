import { Avatar, Card, Container, Typography } from '@mui/material'
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import { Box } from '@mui/system'
import React from 'react'

const PerfilUsuario = () => {
  return (
    <Container maxWidth='sm'>
        <Typography variant='h5' color={'white'}>Meus Dados</Typography>
            <Card sx={{display:'flex', backgroundColor: 'goldenrod', alignItems:'center', gap: 2, pl: 2}}>
                <Avatar><AccountCircleTwoTone /></Avatar>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box sx={{display:'flex', gap:1}}>
                        <Typography variant='h6' color={'white'}>Nome:</Typography>
                        <Typography variant='h6' color={'white'}>Renan Lima</Typography>
                    </Box>
                    <Box sx={{display:'flex', gap:1}}>
                        <Typography variant='h6' color={'white'}>Email:</Typography>
                        <Typography variant='h6' color={'white'}>teste@lolmail.com</Typography>
                    </Box>
                </Box>
            </Card>
    </Container>
)
}

export default PerfilUsuario