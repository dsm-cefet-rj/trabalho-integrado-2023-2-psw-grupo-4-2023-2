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
      alignItems: 'center'
    }}>
      <Box>
        <img src={img} alt="Descrição da imagem" />
      </Box>
      <Typography variant='h6'>Você leu 34 livros esse ano. Parabéns</Typography>
      <Typography variant='h5'>Relatório do Usuário</Typography>
      <Stack>
        <Typography>Romance: 32 livros</Typography>
        <Typography>Terror: 1 livros</Typography>
        <Typography>Suspense: 2 livros</Typography>
      </Stack>
    </Box>
  </>
  )
}

export default RelatorioUsuario