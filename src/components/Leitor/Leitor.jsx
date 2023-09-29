import React, { useState, useEffect, useContext } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.js';
import './Leitor.css';
import { Box, Button, IconButton, Stack, Tooltip } from '@mui/material';
import { ArrowCircleLeft, ArrowCircleRight, ZoomIn, ZoomOut } from '@mui/icons-material';
import { AutenticacaoContext } from '../../contexts/Autenticacao';

const Leitor = ({ namePdf, id }) => {

    const {usuario, setUsuario} = useContext(AutenticacaoContext);

    // const [leitura, setLeitura] = useState(()=> {
    //     const storedLeitura = localStorage.getItem("leitura");
    //     return storedLeitura ? JSON.parse(storedLeitura) : {livros: leitura};
    // });

    // useEffect(()=>{
    //     localStorage.setItem('leitura',JSON.stringify(leitura))
    // },[leitura]);

    const [pageNum, setPageNum] = useState(1);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [tamanhoPdf, setTamanhoPdf] = useState('pequeno');

    const leituras = usuario.leituras;

    const leitura = leituras.find(leitura => leitura.id===id);

    const pagina = leitura? leitura.pag: 1;
    const path = '/src/assets/pdf/';

    useEffect(() => {
        const url = path + namePdf + '.pdf';
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

        pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
            setPdfDoc(pdfDoc_);
        });
    }, [namePdf]);

    useEffect(() => {
        const renderizaPagina = (pageNumber) => {
            if (pdfDoc) {
                let pageRendering = false;
                let pageNumPending = null;

                if (pageRendering) {
                    pageNumPending = pageNumber;
                } else {
                    pageRendering = true;

                    pdfDoc.getPage(pageNumber).then((page) => {
                        const scale = 1.5;
                        const viewport = page.getViewport({ scale: scale });
                        const canvas = document.getElementById('the-canvas');
                        const context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        const renderContext = {
                            canvasContext: context,
                            viewport: viewport,
                        };

                        const renderTask = page.render(renderContext);

                        renderTask.promise.then(() => {
                            pageRendering = false;
                            if (pageNumPending !== null) {
                                renderizaPagina(pageNumPending);
                            }
                        });
                    });
                }

                document.getElementById('page_num').textContent = pageNumber;
                document.getElementById('page_count').textContent = pdfDoc.numPages;
                document.getElementById('porcentagem').textContent = (
                    (pageNumber * 100) /
                    pdfDoc.numPages
                ).toFixed(2);
            }
        };

        renderizaPagina(pageNum);
    }, [pageNum, pdfDoc]);

    const onPrevPage = () => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1);
        }
    };

    const onNextPage = () => {
        if (pdfDoc && pageNum < pdfDoc.numPages) {
            setPageNum(pageNum + 1);
        }
    };

    const voltarInicio = () => {
        setPageNum(1);
    };

    const mudarTamanho = () => {
        const tamanhos = ['pequeno', 'medio', 'grande', 'super-grande'];
        const indiceAtual = tamanhos.indexOf(tamanhoPdf);
        const novoIndice = (indiceAtual + 1) % tamanhos.length;
        setTamanhoPdf(tamanhos[novoIndice]);
    };

    return (
        <>
            <Box sx={{
                display:'flex',
                justifyContent:'center'
            }}>
                <canvas id="the-canvas" className={tamanhoPdf}></canvas>
            </Box>

            <Box sx={{
                position:'sticky',
                bottom:0,
                textAlign:"center",
                padding:4
            }}>
                <Button variant='contained' color='secondary' onClick={voltarInicio} size='small' sx={{
                    position:'absolute',
                    bottom:'16px',
                    right:'16px',
                }}>
                    Voltar a página inicial
                </Button>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={16}>
                    <Tooltip arrow title='Anterior' placement='left' >
                        <IconButton onClick={onPrevPage}>
                            <ArrowCircleLeft fontSize='large'></ArrowCircleLeft>
                        </IconButton>
                    </Tooltip>
                    <Tooltip arrow title='Zoom' placement='top' >
                        <IconButton onClick={mudarTamanho} >
                            {tamanhoPdf === 'super-grande' ? (
                                <ZoomOut fontSize='large'></ZoomOut>
                            ) : (
                                <ZoomIn fontSize='large'></ZoomIn>
                            )}

                        </IconButton>
                    </Tooltip>
                    <Tooltip arrow title='Próximo' placement='right' >
                        <IconButton onClick={onNextPage}>
                            <ArrowCircleRight fontSize='large'></ArrowCircleRight>
                        </IconButton>
                    </Tooltip>
                </Stack>

                <Box>
                    <span>
                        Página: <span id="page_num"></span> / <span id="page_count"></span>(
                        <span id="porcentagem"></span>%)
                    </span>
                </Box>
            </Box>
        </>
    );
};

export default Leitor;
