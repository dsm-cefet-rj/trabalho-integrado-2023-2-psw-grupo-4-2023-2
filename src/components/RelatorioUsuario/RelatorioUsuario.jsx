import { Box, Typography } from '@mui/material'
import React from 'react'
import img from '../../assets/imagem-relatorio.png'
import { Stack } from '@mui/system'
import './RelatorioUsuario.css'
import { AutenticacaoContext } from '../../contexts/Autenticacao'
import { LivrosContext } from "../../contexts/Livros";
import { useContext, useState } from "react";

const RelatorioUsuario = () => {
  const { livros } = useContext(LivrosContext);
  const { usuario } = useContext(AutenticacaoContext);
  const leituras = usuario.leituras;
  let listaIDs = leituras.map(item => item.id);

  const [ romance, setRomance] = useState(0);
  const [ terror, setTerror] = useState(0);
  const [ fantasia, setFantasia] = useState(0);
  const [ suspense, setSuspense] = useState(0);
  
  livros.map(livro => {
    if(listaIDs && listaIDs.includes(livro)){ 
        generosLidos.map(Objeto =>{
          if(Objeto.genero===livro.genero){
            Objeto.qtd+=1;
          }
        })
     }
  })
  

  const generosLidos =[
    {genero: "Romance", qtd: romance},
    {genero: "Terror", qtd: terror},
    {genero: "Fantasia", qtd: fantasia},
    {genero: "Suspense", qtd: suspense},
  ];

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
      <Typography variant='h6' color={'secondary'}>Você leu {totalLidos} livros esse ano. Parabéns</Typography>
      <Stack className='stack-relatorio'>
        <Typography variant='h5'>Seu relatório:</Typography>

        {listaPorcentagem}
        
      </Stack>
    </Box>
  </>
  )
}

export default RelatorioUsuario