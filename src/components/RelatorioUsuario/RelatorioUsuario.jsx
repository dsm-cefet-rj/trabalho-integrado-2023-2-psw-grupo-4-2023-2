import { Box, Typography } from '@mui/material'
import React from 'react'
import img from '../../assets/imagem-relatorio.png'
import { Stack } from '@mui/system'
import './RelatorioUsuario.css'

const RelatorioUsuario = () => {

  const generosLidos =[
    {genero: "Romance", qtd: 5},
    {genero: "Terror", qtd: 4},
    {genero: "Fantasia", qtd: 7},
    {genero: "Suspense", qtd: 2},
    {genero: "True crime", qtd: 0}
  ];

  // const generosLidos =[]; 

  const totalLidos = generosLidos.reduce((soma, objeto) => soma + objeto.qtd, 0);

  generosLidos.sort((a,b) => b.qtd - a.qtd);

  const listaPorcentagem = generosLidos.map((objeto) => {
    const porcentagem = ((objeto.qtd * 100) / totalLidos).toFixed(1);
    const largura = `${porcentagem}%`;
  
    return (
      <div key={objeto.genero} className='item-lista-genero'>
        <Typography>{objeto.genero}: {objeto.qtd} livros</Typography>
        <div className='cem-porcento'>
          <div className='porcentagem' style={{ width: largura }}>
            {largura}
          </div>
        </div>
      </div>
      );
  });
 
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
      { totalLidos === 0? (
         <Typography variant='h6' color={'secondary'}>Você não leu nenhum livro esse ano.</Typography>
      ) : (
        <>
        <Typography variant='h6' color={'secondary'}>Você leu {totalLidos} livros esse ano. Parabéns</Typography>
        <Stack className='stack-relatorio'>
          <Typography variant='h5'>Seu relatório:</Typography>
          {listaPorcentagem}  
        </Stack>
        </>
      )}
    </Box>
  </>
  )
}

export default RelatorioUsuario