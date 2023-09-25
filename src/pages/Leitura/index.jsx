import React from 'react'

import Leitor from '../../components/Leitor/Leitor'
import { useParams } from 'react-router-dom';

import pdfDefault from '../../assets/pdf/exemplo.pdf';

const Leitura = () => {
    const { urlPdf } = useParams();

    const url = urlPdf || pdfDefault  
    return (
        <Leitor namePdf={url}></Leitor>
    )
}

export default Leitura