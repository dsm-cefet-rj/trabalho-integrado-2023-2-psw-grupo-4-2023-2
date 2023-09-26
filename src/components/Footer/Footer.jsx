import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Logo from '../Logo/Logo'

const Footer = ({drawerWidth}) => {
  return (
        <Box sx={{display: 'flex', backgroundColor: '#031881', alignItems: 'center', flexDirection: 'column', ml:`${drawerWidth}px`}}>
            <Logo color={'white'}/>
            <Typography color={'white'}>Desvende Mundos: onde cada página é uma Nova Aventura!</Typography>
        </Box>
  )
}

export default Footer