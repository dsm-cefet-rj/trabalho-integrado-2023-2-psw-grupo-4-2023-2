import React from 'react'

import Leitor from '../../components/Leitor/Leitor'
import { useParams } from 'react-router-dom';

import pdfDefault from '../../assets/pdf/exemplo.pdf';
import Voltar from '../../components/Voltar/Voltar';

const Leitura = () => {
    const { urlPdf, id } = useParams();
    console.log(id)
    const url = urlPdf || pdfDefault  
    return (
        <>
        <Voltar />
        <Leitor id={id} namePdf={url}></Leitor>
        </>
    )
}

export default Leitura