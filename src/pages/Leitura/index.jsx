import React from 'react'

import Leitor from '../../components/Leitor/Leitor'
import { useParams } from 'react-router-dom';

import pdfDefault from '../../assets/pdf/exemplo.pdf';
import Voltar from '../../components/Voltar/Voltar';

const Leitura = () => {
    const { urlPdf } = useParams();

    const url = urlPdf || pdfDefault  
    return (
        <>
        <Voltar />
        <Leitor namePdf={url}></Leitor>
        </>
    )
}

export default Leitura