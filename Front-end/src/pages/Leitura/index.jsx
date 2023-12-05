import React from 'react'

import Leitor from '../../components/Leitor/Leitor'
import { useParams } from 'react-router-dom';

import pdfDefault from '../../assets/pdf/exemplo.pdf';
import Voltar from '../../components/Voltar/Voltar';
import { useLivros } from '../../hooks/useLivros';

const Leitura = () => {
    const { livroSelecionado } = useLivros();
    return (
        <>
        <Voltar />
        <Leitor id={livroSelecionado._id} namePdf={livroSelecionado.pdf}></Leitor>
        </>
    )
}

export default Leitura