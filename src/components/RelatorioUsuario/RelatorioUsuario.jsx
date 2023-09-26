import { Box, Typography } from '@mui/material'
import React from 'react'
import img from '../../assets/imagem-relatorio.png'
import { Stack } from '@mui/system'

const RelatorioUsuario = () => {
  return (
  <>
    <Box sx={{
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white'
    }}>
      <Box>
        <img src={img} alt="Descrição da imagem" />
      </Box>
      <Typography variant='h6' color={'secondary'}>Você leu 5 livros esse ano. Parabéns</Typography>
      <Stack>
        <Typography variant='h5'>Seu relatório:</Typography>
        <Typography>Romance: 2 livros</Typography>
        <Typography>Terror: 1 livros</Typography>
        <Typography>Suspense: 2 livros</Typography>
      </Stack>
    </Box>
  </>
  )
}

export default RelatorioUsuario