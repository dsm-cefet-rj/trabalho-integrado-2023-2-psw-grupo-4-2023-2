import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import img from '../../assets/imagem-relatorio.png'
import { Stack } from '@mui/system'
import './RelatorioUsuario.css'
import { AutenticacaoContext } from '../../contexts/Autenticacao'
import { LivrosContext } from "../../contexts/Livros";
import { useContext, useState } from "react";

const RelatorioUsuario = () => {
  const { livros } = useContext(LivrosContext);
  const { usuario } = useContext(AutenticacaoContext);

  const idLivros = usuario.leituras.map(leitura => leitura.id)
  const leituras = new Set(idLivros)
  const continueLendo = livros.filter(livro=>leituras.has(livro.id))

  const [ romance, setRomance] = useState(0);
  const [ terror, setTerror] = useState(0);
  const [ fantasia, setFantasia] = useState(0);
  const [ suspense, setSuspense] = useState(0);
  const [ outros, setOutros] = useState(0);
  

  let rom=0; let terr=0; let fant=0; let susp =0; let outr=0;
  useEffect(()=>{
    continueLendo.map(livro => {
      console.log(livro.genero);
        switch (livro.genero) {
          case "Romance":
            rom++;
            console.log(rom);
            break;
          case "Terror":
            terr++;
            console.log(terr);
            break;
          case "Fantasia":
            fant++;
            break;
          case "Suspense":
            susp++;
            break
          default:
            outr++;
            break; 
          }
        }
      )
    setRomance(rom);
    setTerror(terr);
    setFantasia(fant);
    setSuspense(susp);
    setOutros(outr);
  },[romance,terror,fantasia,suspense,outros])
    
  const generosLidos =[
    {genero: "Romance", qtd: romance},
    {genero: "Terror", qtd: terror},
    {genero: "Fantasia", qtd: fantasia},
    {genero: "Suspense", qtd: suspense},
    {genero: "Outros", qtd: outros},
  ];

  // const generosLidos =[]; 

  const totalLidos = generosLidos.reduce((soma, objeto) => soma + objeto.qtd, 0);

  generosLidos.sort((a,b) => b.qtd - a.qtd);

  const listaPorcentagem = generosLidos.map((objeto) => {
    if(objeto.qtd === 0){
      return (<></>);
    }
    else{
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
    }
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