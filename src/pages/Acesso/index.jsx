import { Box } from '@mui/system'
import React from 'react'
import imagemPrincipalHome from '../../assets/imagem-principal-home.jpg'
import { Button } from '@mui/material'

const Acesso = () => {
  return (
    <>
      <Box sx={{
        width: '100%',
        padding: '40px',
        backgroundColor: '#091A62',
        position: 'absolute'

      }}>
      <Button>LOGIN</Button>
      <Button>CADASTRO</Button>
      </Box>
      
      <Box sx={{
         backgroundImage: `url(${imagemPrincipalHome})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center center',
         height: '100vh', 
      }}>

      </Box>
    </>
  )
}

export default Acesso