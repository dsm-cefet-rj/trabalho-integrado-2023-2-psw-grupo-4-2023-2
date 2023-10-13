import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Livro from '../../components/Livro/Livro';
import { LivrosContext } from '../../contexts/Livros';
import Voltar from '../../components/Voltar/Voltar';

const Acervo = ({}) => {

    const { livros, livrosPesquisados } = useContext(LivrosContext);

    const acervo = livrosPesquisados || livros

    return (
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}columns={60} marginY={4}>
            {acervo ? acervo.map((livro, index) =>
                <Grid key={index} component={'div'} item xs={60} sm={30} md={20} lg={15} xl={12} color={'white'} sx={{
                    display: {xs:'flex', md:'block'},
                    alignItems:'center',
                    justifyContent:'center'
                }}>

                    <Livro key={livro.id} id={livro.id} urlImage={livro.url} titulo={livro.name} autor={livro.descricao} />
                </Grid>
            ) : ""}

        </Grid>
    );
}

export default Acervo;
