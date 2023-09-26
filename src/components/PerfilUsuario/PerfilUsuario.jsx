import { Avatar, Card, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/system'
import React from 'react'

const PerfilUsuario = () => {
  return (
    <Box>
        <Typography variant='h5'>Meus Dados</Typography>
        <Card sx={{display:'flex', flexDirection: 'column'}}>
            <Avatar><AccountCircle /></Avatar>
            <Box sx={{display:'flex'}}>
                <Typography variant='body2'>Nome:</Typography>
                <Typography variant='body2'>Renan Lima</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
                <Typography variant='body2'>Email:</Typography>
                <Typography variant='body2'>teste@lolmail.com</Typography>
            </Box>
        </Card>
    </Box>
)
}

export default PerfilUsuario