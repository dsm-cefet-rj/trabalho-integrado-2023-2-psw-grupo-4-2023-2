import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Logo from '../Logo/Logo'

const Footer = ({ drawerWidth }) => {
  return (
    <Box sx={{
      backgroundColor: '#031881',
      paddingY: 4
    }}>

      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        ml: {md:`${drawerWidth}px`},
        width: {md:`calc(100% - ${drawerWidth}px)`},
        textAlign:'center'
      }}
      >
        <Logo color={'white'} />
        <Typography color={'white'}>Desvende Mundos: onde cada página é uma Nova Aventura!</Typography>
      </Box>

    </Box>
  )
}

export default Footer