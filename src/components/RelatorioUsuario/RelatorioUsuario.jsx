import { Box, Typography } from '@mui/material'
import React from 'react'
import img from '../../assets/imagem-relatorio.png'
import { Stack } from '@mui/system'

const RelatorioUsuario = () => {

  const generosLidos =[
    {genero: "Romance", qtd: 5},
    {genero: "Terror", qtd: 4},
    {genero: "Fantasia", qtd: 7},
    {genero: "Suspense", qtd: 2},
  ];

  const totalLidos = generosLidos.reduce((soma, objeto) => soma + objeto.qtd, 0);

  generosLidos.sort((a,b) => b.qtd - a.qtd);
 
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
      <Typography variant='h6' color={'secondary'}>Você leu {totalLidos} livros esse ano. Parabéns</Typography>
      <Stack>
        <Typography variant='h5'>Seu relatório:</Typography>

        {
          generosLidos.map((objeto) => (

            <><Typography>{objeto.genero}: {objeto.qtd} livros</Typography>
            <div>
              <div>{(objeto.qtd * 100) / totalLidos}%</div>
            </div></>
        ))}
        
      </Stack>
    </Box>
  </>
  )
}

export default RelatorioUsuario